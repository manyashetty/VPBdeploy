import { Schema, Document, model, Types } from 'mongoose';
import { IUser } from './user.model'; 


 interface IContact extends Document {
    name: string;
    phone_no: Number;
    email: string;
    message: string;
    created_at: Date;

}

const ContactSchema = new Schema<IContact>({
    name: { type: String, required: true },
    phone_no: { type: Number, required: true },
    email: { type: String, required: true, match:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/},
    message: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
  
});

const ContactModel = model<IContact>('Conatct', ContactSchema);

export default ContactModel;