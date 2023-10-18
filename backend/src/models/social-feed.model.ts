import { Schema, Document, model } from 'mongoose';

interface ISocialfeed extends Document {
  platform: string;
  content:String
}

const SocialfeedSchema = new Schema<ISocialfeed>({
  platform: String,
  content:String
});

const SocialfeedModel = model<ISocialfeed>('Socialfeed', SocialfeedSchema);

export default SocialfeedModel;