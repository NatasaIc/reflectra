import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  email: string;
  password: string;
  isAdmin?: boolean;
}

const UserSchema: Schema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true, minlength: 6 },
  isAdmin: { type: Boolean, default: false },
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
