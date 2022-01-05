import mongoose from 'mongoose';
import { PreferredContact } from './user.enums';

export interface IUsers {
    firstName: string;
    lastName: string;
    phone: Number;
    email: string;
    preferredContact: PreferredContact,
    isVerified: boolean;
};

export interface IUsersSchema extends IUsers {
    _id: string;
    __v: string;
}

export const UsersSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    preferredContact: { type: String, required: true },
    isVerified: { type: Boolean, required: true },
    __v: { type: String, default: '1.0' }
});

// For performance you would want to index unique fields like email

export const UsersModel = mongoose.model('Users', UsersSchema);