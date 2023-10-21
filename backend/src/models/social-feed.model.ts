import { Schema, Document, model } from 'mongoose';

interface ISocialfeed extends Document {
  image: string,
  platform: string;
  content:String,
  created_at:Date;

}

const SocialfeedSchema = new Schema<ISocialfeed>({
  image: String,
  platform: String,
  content:String,
  created_at:{type : Date , default : Date.now()}
});

const SocialfeedModel = model<ISocialfeed>('Socialfeed', SocialfeedSchema);

export default SocialfeedModel;