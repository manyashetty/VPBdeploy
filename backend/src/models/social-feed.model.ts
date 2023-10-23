import { Schema, Document, model, Types } from 'mongoose';
import { IUser } from './user.model';

interface ISocialfeed extends Document {
  image: string,
  platform: string;
  content:String,
  created_at:Date;
  owner: Types.ObjectId | IUser;
}

const SocialfeedSchema = new Schema<ISocialfeed>({
  image: String,
  platform: String,
  content:String,
  created_at:{type : Date , default : Date.now()},
  owner: {
    type: Schema.Types.ObjectId, 
    ref: 'User'
  }
});

const SocialfeedModel = model<ISocialfeed>('Socialfeed', SocialfeedSchema);

export default SocialfeedModel;