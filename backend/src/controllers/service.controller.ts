import { Request, Response } from 'express';
import ServiceModel from '../models/service.model.js';
import { CustomRequest } from '../routes/auth.middleware'; 
import UserModel, { IUser } from '../models/user.model'; 
import { authenticateJWT } from '../routes/auth.middleware.js'; 
// import multerConfig from "../routes/mutler.js";
// import { S3 } from 'aws-sdk';
// import S3Instance from './s3client.js';
// import { generatePublicPresignedUrl } from "../routes/mutler.js";


export const getServices = async (req: Request, res: Response) => {
  try {
    const services = await ServiceModel.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createService = [ authenticateJWT, async (req: CustomRequest, res: Response) => {
  const serviceData = req.body;
  console.log(serviceData)
  
  const { name, description, image_url} = req.body;
  if (!name || !description ) {
    console.log()
    return res.status(400).json({ error: 'Name and description are required' });
  }
  if (!image_url){
    return res.status(400).json({ error: 'Image url is required' });
  }
  if (Object.keys(serviceData).length === 0) {
    return res.status(400).send({ status: false, msg: "No data provided" });
  }
  // const preSignedUrl: string = generatePublicPresignedUrl((req.file as Express.MulterS3.File).key);


  try {
    const service = new ServiceModel({ name, description,image_url, owner: req.userId });
    await service.save();
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
},
];

export const updateService =[ authenticateJWT, async (req: Request, res: Response) => {
  try {
    const serviceId = req.params.id;
    const { name, description } = req.body;

    // Check if the service exists
    const existingService = await ServiceModel.findById(serviceId);
    if (!existingService) {
      return res.status(404).json({ error: 'Service not found' });
    }

    // Update the service
    if (name) {
      existingService.name = name;
    }
    if (description) {
      existingService.description = description;
    }

    // Save the updated service
    const updatedService = await existingService.save();
    res.status(200).json(updatedService);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
},
];

export const deleteService =[authenticateJWT, async (req: Request, res: Response) => {
  try {
    const serviceId = req.params.id;

    // Check if the service exists
    const existingService = await ServiceModel.findById(serviceId);
    if (!existingService) {
      return res.status(404).json({ error: 'Service not found' });
    }

    // const imageKey = existingService.image_url;
//delete function for img in bucket 
// const deleteImageFromS3 = (imageKey: string, s3: S3): Promise<void> => {
//   const params: S3.DeleteObjectRequest = {
//     Bucket: process.env.WASABI_BUCKET as string,
//     Key: imageKey,
//   };

//   return new Promise<void>((resolve, reject) => {
//     s3.deleteObject(params, (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve();
//       }
//     });
//   });
// };

    // Delete the service using deleteOne
    // await ServiceModel.deleteOne({ _id: serviceId });
    // await deleteImageFromS3(imageKey, S3Instance);
    // res.status(204).json({message:"Servicedeleted"}); // deleted
  } catch (error) {
    
    res.status(500).json({ error: 'Internal Server Error' });
  }
},
];
// function deleteImageFromS3(imageKey: string, s3: S3) {
//   throw new Error('Function not implemented.');
// }

