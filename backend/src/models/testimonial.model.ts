import { Schema, Document, model, Types } from 'mongoose';
import { IUser } from './user.model'; 

interface ITestimonial extends Document {
  name: string;
  comment: string;
  image_url:string;
  created_at: Date;
  owner: Types.ObjectId | IUser;

}

const TestimonialSchema = new Schema<ITestimonial>({
  name: String,
  comment: String,
  image_url:String,
  created_at: { type: Date, default: Date.now },
  owner: {
    type: Schema.Types.ObjectId, 
    ref: 'User'
  }
});

const TestimonialModel = model<ITestimonial>('Testimonial', TestimonialSchema);

export default TestimonialModel;