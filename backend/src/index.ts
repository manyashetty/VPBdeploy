
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import serviceRoutes from './routes/service.routes';
import authRoutes from './routes/auth.middleware';
import { registerUser, loginUser } from './controllers/user.controller';
import { authenticateJWT, CustomRequest } from './routes/auth.middleware';
import { Request, Response, NextFunction } from 'express'; 

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

app.use('/projects', authenticateJWT, serviceRoutes); 
app.use('/auth', authRoutes); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


