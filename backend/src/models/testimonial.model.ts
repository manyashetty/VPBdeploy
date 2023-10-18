import { Schema, Document, model } from 'mongoose';

interface ITestimonial extends Document {
  name: string;
  comment: string;
  image_url:string;
}

const TestimonialSchema = new Schema<ITestimonial>({
  name: String,
  comment: String,
  image_url:String
});

const TestimonialModel = model<ITestimonial>('Testimonial', TestimonialSchema);

export default TestimonialModel;