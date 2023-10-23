import { Schema, Document, model, Types } from 'mongoose';
import { IUser } from './user.model'; 

interface IProject extends Document {
  title: string;
  description: string;
  image_url:string;
  owner: Types.ObjectId | IUser; 
}

const ProjectSchema = new Schema<IProject>({
  title: String,
  description: String,
  image_url:String,
  owner: {
    type: Schema.Types.ObjectId, 
    ref: 'User'
  },
});

const ProjectModel = model<IProject>('Project', ProjectSchema);

export default ProjectModel;