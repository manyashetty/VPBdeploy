import { S3 } from 'aws-sdk';

// Create an AWS S3 client instance
const S3Instance = new S3({
  region: 'ap-southeast-1', 
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  // You can also set other options here, if needed
});

export default S3Instance;

