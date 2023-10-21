
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import serviceRoutes from './routes/service.routes';
import authRoutes from './routes/auth.middleware';
import { registerUser, loginUser } from './controllers/user.controller';
import { authenticateJWT, CustomRequest } from './routes/auth.middleware';
import { Request, Response, NextFunction } from 'express'; 
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

// require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;
const REFRESH_SECRET_KEY = process.env.REFRESH_SECRET_KEY;
const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb+srv://manu12shetty:tara12shetty@cluster0.6qcysms.mongodb.net/test')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });


app.use('/api', serviceRoutes);
app.post('/register', registerUser);
app.post('/login', loginUser);
app.get('/protected', authenticateJWT, (req: CustomRequest, res: Response) => {
  res.json({ message: 'Protected route' });
});

app.post('/refresh-token', (req: Request, res: Response) => {

  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ error: 'Refresh token missing' });
  }

  try {
    
    const decoded = jwt.verify(refreshToken, REFRESH_SECRET_KEY as jwt.Secret);

    interface JwtPayload {
      userId: string;
    }    
    
    const payload = { userId: (decoded as JwtPayload).userId };

    const newAccessToken = jwt.sign(payload, SECRET_KEY as jwt.Secret, { expiresIn: '15m' });


    res.status(200).json({ accessToken: newAccessToken });
  } catch (error) {
    
    return res.status(401).json({ error: 'Invalid refresh token' });
  }
});


app.use('/projects', authenticateJWT, serviceRoutes); 
app.use('/auth', authRoutes); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


