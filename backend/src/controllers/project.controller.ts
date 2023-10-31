import { Request, Response } from 'express';
import ProjectModel from '../models/project.model.js';
import UserModel, { IUser } from '../models/user.model'; 
import { CustomRequest } from '../routes/auth.middleware'; 
import { authenticateJWT } from '../routes/auth.middleware.js'; 

export const getProject = async (req: Request, res: Response) => {
  try {
    const project = await ProjectModel.find();
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getProjectById = async (req: Request, res: Response) => {
  try {
    const projectId = req.params.id;
    const project = await ProjectModel.findById(projectId);

    if (project) {
      console.log(project);
      res.status(200).json(project);
    } else {
      const allProjects = await ProjectModel.find();
      res.status(404).json({ error: "Project not found", allProjects: allProjects });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createProject = [authenticateJWT, async (req: CustomRequest, res: Response) => {
 
  try {
  const { title, description, image_url } = req.body;
    const project = new ProjectModel({
      title,
      description,
      image_url,
      owner: req.userId
    });

    await project.save();
    res.status(201).json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}];

export const updateProject = [authenticateJWT, async (req: Request, res: Response) => {
  try {
    const projectId = req.params.id;
    const { title, description, image_url } = req.body;

    // Check if the service exists
    const existingProject = await ProjectModel.findById(projectId);
    if (!existingProject) {
      return res.status(404).json({ error: 'Project not found' });
    }

    // Update the service
    if (title) {
      existingProject.title = title;
    }
    if (description) {
      existingProject.description = description;
    }
    if (image_url){
        existingProject.image_url = image_url
    }

    // Save the updated service
    const updatedProject = await existingProject.save();
    res.status(200).json(updatedProject);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
},
];

export const deleteProject = async (req: Request, res: Response) => {
  try {
    const projectId = req.params.id;

    // Check if the service exists
    const existingProject = await ProjectModel.findById(projectId);
    if (!existingProject) {
      return res.status(404).json({ error: 'Project not found' });
    }

    // Delete the service using deleteOne
    await ProjectModel.deleteOne({ _id: projectId });
    res.status(204).send('Deleted successfully');

    // res.status(204).json({message:"Project deleted"}); // deleted
  } catch (error) {
    
    res.status(500).json({ error: 'Internal Server Error' });
  }
};