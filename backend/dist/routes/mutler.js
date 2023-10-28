"use strict";
// import { Request,RequestHandler } from 'express';
// import MulterS3 from 'multer-s3';
// import multer, { StorageEngine} from 'multer';
// import aws, { S3 } from 'aws-sdk';
// import dotenv from 'dotenv';
// import { S3Client } from '@aws-sdk/client-s3';
// dotenv.config();
// interface CustomPresignOptions {
//   Bucket: string;
//   Key: string;
//   Expires: number;
// }
// // Configure AWS S3 client
// const s3 = new aws.S3({
//   accessKeyId: process.env.AWS_ACCESS_KEY as string,
//   secretAccessKey: process.env.AWS_SECRET_KEY as string,
//   endpoint: 'https://s3.wasabisys.com',
// });
// // Function to generate a 12-hour pre-signed URL for public access
// const generatePublicPresignedUrl = (key: string): string => {
//   const params: CustomPresignOptions = {
//     Bucket: process.env.WASABI_BUCKET as string,
//     Key: key,
//     Expires: 43200, // 12 hours (12 hours * 3600 seconds)
//   };
//   return s3.getSignedUrl('getObject', params);
// };
// const s3Config = new S3Client({
//     region: 'ap-southeast-1',
//     credentials:{
//        accessKeyId:'63OC7YN7R0OHRQ8EKJB2',
//        secretAccessKey:'CFrRYDtoDvFH8F4o4CBe7IM9ANQAVzeOyht2Le9A'
//    }
//  })
// // Configure Multer for file uploads to Wasabi
// const storage: StorageEngine = MulterS3({
//   s3:s3Config, // Pass the s3 object directly here
//   bucket: process.env.WASABI_BUCKET as string,
//   key: (req: Request, file, cb) => {
//     cb(null, 'upload/' + Date.now() + '_' + file.originalname);
//   },
//   acl: 'public-read', // Set the ACL to 'public-read' for public access
// });
// const upload: RequestHandler = multer({ storage }).single('file');
// // const upload: RequestHandler = multer({ storage }) as unknown as RequestHandler;
// export { upload, generatePublicPresignedUrl, s3 };
