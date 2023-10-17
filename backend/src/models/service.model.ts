import { Schema, Document, model } from 'mongoose';

interface IService extends Document {
  name: string;
  description: string;
}

const ServiceSchema = new Schema<IService>({
  name: String,
  description: String,
});

const ServiceModel = model<IService>('Service', ServiceSchema);

export default ServiceModel;
