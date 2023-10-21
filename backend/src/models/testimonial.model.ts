import { Schema, Document, model } from 'mongoose';

interface ITestimonial extends Document {
  name: string;
  comment: string;
  image_url:string;
  created_at: Date;
}

const TestimonialSchema = new Schema<ITestimonial>({
  name: String,
  comment: String,
  image_url:String,
  created_at: { type: Date, default: Date.now }
});

const TestimonialModel = model<ITestimonial>('Testimonial', TestimonialSchema);

export default TestimonialModel;