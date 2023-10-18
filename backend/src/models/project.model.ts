import { Schema, Document, model } from 'mongoose';

interface IProject extends Document {
  title: string;
  description: string;
  image_url:string
}

const ProjectSchema = new Schema<IProject>({
  title: String,
  description: String,
  image_url:String
});

const ProjectModel = model<IProject>('Project', ProjectSchema);

export default ProjectModel;