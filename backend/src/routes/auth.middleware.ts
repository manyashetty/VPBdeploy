import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY;

export interface CustomRequest extends Request {
  userId?: any;
}

export const authenticateJWT = (req: CustomRequest, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    console.log('Token missing');
    return res.status(401).json({ error: 'Unauthorized' });
  }
  console.log('Received Token:', token);
  
  try {
    const decoded = jwt.verify(token, SECRET_KEY as jwt.Secret) as { userId: string };

    
    if (!decoded || !decoded.userId) {
      console.log('Token verification failed - Invalid payload');
      return res.status(403).json({ error: 'Forbidden' });
    }

    req.userId = decoded.userId; 
    console.log('Token verified successfully');
    next();
  } catch (err) {
    console.error('Token verification failed', err);
    return res.status(403).json({ error: 'Forbidden' });
  }
};



export default authenticateJWT;
