// import AWS from "aws-sdk";
// import { S3Client } from '@aws-sdk/client-s3';
// import multer from "multer";
// import multerS3 from "multer-s3";

// const s3Config = new S3Client({
//    region: 'ap-southeast-1',
//    credentials:{
//       accessKeyId:'63OC7YN7R0OHRQ8EKJB2',
//       secretAccessKey:'CFrRYDtoDvFH8F4o4CBe7IM9ANQAVzeOyht2Le9A'
//   }
// })

// const upload = multer({
//     storage: multerS3({
//         s3: s3Config,
//         bucket: 'bucket-name',
//         metadata: function (req, file, cb) {
//             cb(null, { fieldName: file.fieldname });
//         },
//         acl: 'public-read',
//         key: function (req, file, cb) {
//             cb(null, Date.now().toString())
//         }
//     })
// })


// export { upload }



// // import express, { Request, Response } from 'express';
// // import AWS from 'aws-sdk';
// // import { S3Client } from '@aws-sdk/client-s3';
// // import multer from 'multer';
// // import multerS3 from 'multer-s3';

// // // Set up your AWS credentials
// // AWS.config.update({
// //   accessKeyId: 'DVMN76DAPWWU8H9PCWJL',
// //   secretAccessKey: 'RzCRwtfn9eaZ7v4tXf7trdROuK416tLDhKCqg3cF',
// //   region: 'ap-southeast-1'
// // });

// // // Create an S3 instance
// // const s3: AWS.S3Client = new AWS.S3();


// // // Set up multer middleware for handling file uploads
// // const upload = multer({
// //   storage: multerS3({
// //     s3,
// //     bucket: 'voltriximages', // Replace with your actual bucket name
// //     acl: 'public-read', // Set the desired access control level
// //     key: (req: Request, file: Express.Multer.File, cb: (error: any, key: string) => void) => {
// //       cb(null, Date.now().toString() + '-' + file.originalname);
// //     }
// //   })
// // });

// // // Create an Express app
// // const app = express();

// // // Upload a file
// // app.post('/upload', upload.single('file'), (req: Request, res: Response) => { 
// //     if (req.file) { 
// //         res.status(200).json({ message: 'File uploaded successfully!', url: (req.file as any).location });
// //     } else { 
// //         res.status(400).json({ error: 'Error uploading file' }); 
// //     }
// //  });

// // // Get file details
// // app.get('/files/:fileName', (req: Request, res: Response) => {
// //   const fileName: string = req.params.fileName;
// //   const params: AWS.S3.HeadObjectRequest = {
// //     Bucket: 'voltriximages', // Replace with your actual bucket name
// //     Key: fileName
// //   };

// //   s3.headObject(params, (err: AWS.AWSError, data: AWS.S3.HeadObjectOutput) => {
// //     if (err) {
// //       res.status(400).json({ error: 'File not found' });
// //     } else {
// //       res.status(200).json(data);
// //     }
// //   });
// // });

// // // Delete a file
// // app.delete('/files/:fileName', (req: Request, res: Response) => {
// //   const fileName: string = req.params.fileName;
// //   const params: AWS.S3.DeleteObjectRequest = {
// //     Bucket: 'voltriximages', // Replace with your actual bucket name
// //     Key: fileName
// //   };

// //   s3.deleteObject(params, (err: AWS.AWSError, data: AWS.S3.DeleteObjectOutput) => {
// //     if (err) {
// //       res.status(400).json({ error: 'Error deleting file' });
// //     } else {
// //       res.status(200).json({ message: 'File deleted successfully' });
// //     }
// //   });
// // });

// // // Start the server
// // const port: number = 3000;
// // app.listen(port, () => {
// //   console.log(`Server is running on port ${port}`);
// // });
