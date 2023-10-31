
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
import cors from 'cors';

import aws, { S3 } from 'aws-sdk';
import multer, { memoryStorage } from 'multer';

import path from 'path';
// import {upload} from './routes/mutler';
// import multer, { Multer } from 'multer';

import{ upload, s3, storage }from './Bucket';
dotenv.config();

// require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;
const REFRESH_SECRET_KEY = process.env.REFRESH_SECRET_KEY;
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3001' }));

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
// app.use('/upload', upload);
app.post('/upload', upload.single('file'), (req: Request, res: Response) => {
  if (!req.file) {
    console.log(req.file)
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const params: S3.Types.PutObjectRequest = {
    Bucket: process.env.WASABI_BUCKET as string,
    Key: `${Date.now()}_${path.basename(req.file.originalname)}`,
    Body: req.file.buffer,
    ACL: 'public-read', // Set ACL to public-read for public access
  };

  // Upload the file to the Wasabi S3 bucket
  s3.upload(params, (error: Error, data: S3.ManagedUpload.SendData) => {
    if (error) {
        console.log(error)
      return res.status(500).json({ error: 'File upload failed' });
    }
    const expirationTimeInSeconds = 48 * 60 * 60; 
    const fileKey = params.Key;
    const fileUrl = s3.getSignedUrl('getObject', { Bucket: params.Bucket, Key: fileKey,  Expires: expirationTimeInSeconds });

    res.json({ key: fileKey, url: fileUrl });
  });
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


