
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import serviceRoutes from './routes/service.routes';

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
