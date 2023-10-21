import { Request, Response } from 'express';
import ContactModel from '../models/contact-us.model';
import UserModel, { IUser } from '../models/user.model'; 
import { CustomRequest } from '../routes/auth.middleware'; 
import { authenticateJWT } from '../routes/auth.middleware.js'; 

export const createContact = [authenticateJWT, async (req: CustomRequest, res: Response) => {
 
    try {
    const { name, phone_no, email, message } = req.body;
      const contact = new ContactModel({
        name,
        phone_no,
        email,
        message
      });
  
      await contact.save();
      res.status(201).json(contact);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }];