import { Request, Response } from 'express';
import TestimonialModel from '../models/testimonial.model.js';

export const getServices = async (req: Request, res: Response) => {
  try {
    const testimonial = await TestimonialModel.find();
    res.status(200).json(testimonial);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createTestimonial = async (req: Request, res: Response) => {
  const { name, comment, image_url } = req.body;
  if (!name || !comment ||!image_url) {
    return res.status(400).json({ error: 'Name ,description and image_url are required' });
  }

  try {
    const testimonial = new TestimonialModel({ name, comment, image_url });
    await testimonial.save();
    res.status(201).json(testimonial);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateTestimonial = async (req: Request, res: Response) => {
  try {
    const TestimonialId = req.params.id;
    const { name, comment, image_url } = req.body;

    // Check if the service exists
    const existingTestimonial = await TestimonialModel.findById(TestimonialId);
    if (!existingTestimonial) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }

    // Update the service
    if (name) {
      existingTestimonial.name = name;
    }
    if (comment) {
      existingTestimonial.comment = comment;
    }
    if (image_url){
        existingTestimonial.image_url= image_url;
    }


    // Save the updated service
    const updatedTestimonial = await existingTestimonial.save();
    res.status(200).json(updatedTestimonial);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteTestimonial = async (req: Request, res: Response) => {
  try {
    const testimonialId = req.params.id;

    // Check if the service exists
    const existingTestimonial = await TestimonialModel.findById(testimonialId);
    if (!existingTestimonial) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }

    // Delete the service using deleteOne
    await TestimonialModel.deleteOne({ _id: testimonialId });

    res.status(204).json({message:"testimonialdeleted"}); // deleted
  } catch (error) {
    
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

