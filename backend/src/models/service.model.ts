import { Schema, Document, model, Types } from 'mongoose';
import { IUser } from './user.model'; 

interface IService extends Document {
  name: string;
  description: string;
  image_url: string;
  owner: Types.ObjectId | IUser;
}

const ServiceSchema = new Schema<IService>({
  name: String,
  description: String,
  image_url: String,
  owner: {
    type: Schema.Types.ObjectId, 
    ref: 'User'
  }
});

const ServiceModel = model<IService>('Service', ServiceSchema);

export default ServiceModel;
