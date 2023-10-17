import { Request, Response } from 'express';
import ServiceModel from '../models/service.model.js';

export const getServices = async (req: Request, res: Response) => {
  try {
    const services = await ServiceModel.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createService = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }

  try {
    const service = new ServiceModel({ name, description });
    await service.save();
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateService = async (req: Request, res: Response) => {
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
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteService = async (req: Request, res: Response) => {
  try {
    const serviceId = req.params.id;

    // Check if the service exists
    const existingService = await ServiceModel.findById(serviceId);
    if (!existingService) {
      return res.status(404).json({ error: 'Service not found' });
    }

    // Delete the service using deleteOne
    await ServiceModel.deleteOne({ _id: serviceId });

    res.status(204).json(); // No Content
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
