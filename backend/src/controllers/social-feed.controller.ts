import { Request, Response } from 'express';
import SocialfeedModel from '../models/social-feed.model.js';

export const getSocialfeed = async (req: Request, res: Response) => {
  try {
    const socialfeed = await SocialfeedModel.find();
    res.status(200).json(socialfeed);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createSocialfeed = async (req: Request, res: Response) => {
  const { platform, content } = req.body;
  if (!platform || !content) {
    return res.status(400).json({ error: 'Platform and content are required' });
  }

  try {
    const socialfeed = new SocialfeedModel({ platform,content });
    await socialfeed.save();
    res.status(201).json(socialfeed);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateSocialfeed = async (req: Request, res: Response) => {
  try {
    const socialfeedId = req.params.id;
    const { platform, content } = req.body;

    // Check if the service exists
    const existingSocialfeed = await SocialfeedModel.findById(socialfeedId);
    if (!existingSocialfeed) {
      return res.status(404).json({ error: 'Socialfeed not found' });
    }

    // Update the service
    if (platform) {
      existingSocialfeed.platform = platform;
    }
    if (content) {
      existingSocialfeed.content = content;
    }

    // Save the updated service
    const updatedSocialfeed = await existingSocialfeed.save();
    res.status(200).json(updatedSocialfeed);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteSocialfeed = async (req: Request, res: Response) => {
  try {
    const socialfeedId = req.params.id;

    // Check if the service exists
    const existingSocialfeed = await SocialfeedModel.findById(socialfeedId);
    if (!existingSocialfeed) {
      return res.status(404).json({ error: 'Service not found' });
    }

    // Delete the service using deleteOne
    await SocialfeedModel.deleteOne({ _id: socialfeedId });

    res.status(204).json({message:"Socialfeed deleted"}); // deleted
  } catch (error) {
    
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
