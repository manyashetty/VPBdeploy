import { Schema, Document, model } from 'mongoose';

interface IService extends Document {
  name: string;
  description: string;
  image_url: string;
}

const ServiceSchema = new Schema<IService>({
  name: String,
  description: String,
  image_url: String
});

const ServiceModel = model<IService>('Service', ServiceSchema);

export default ServiceModel;
