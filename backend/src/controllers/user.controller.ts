
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from '../models/user.model';
require('dotenv').config();

// const SECRET_KEY = '93f7523c148399e7d4db227e35ef5386130a135fe8f38018b99d44eae546138e5e2f98d2a475d28d37a32edcc1d06485c83dac6c6b30b81e7300a418f9de9447';
const SECRET_KEY = process.env.SECRET_KEY;
const REFRESH_SECRET_KEY = process.env.REFRESH_SECRET_KEY;

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body; 
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      username,
      email, 
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    if (!SECRET_KEY || !REFRESH_SECRET_KEY) {
      console.error('Missing secret keys. Please check your environment variables.');
    } else {
    
    const payload = {
      userId: user._id,
    };


    const accessToken = jwt.sign(payload, SECRET_KEY as jwt.Secret, { expiresIn: '45m' });
    const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY as jwt.Secret, { expiresIn: '7d' });
    

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none' as 'none',
    });
  
    res.status(200).json({ accessToken, refreshToken });
  }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
