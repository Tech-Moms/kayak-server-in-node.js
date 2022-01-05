import mongoose from 'mongoose';

export interface IAdventure {
    title: string;
    description: string;
    rating: Number;
    reviews: Number;
    cost: Number;
    image: string;
};

export interface IAdventureSchema extends IAdventure {
    _id: string;
    __v: string;
}

export const AdventureSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    cost: { type: Number, required: true },
    image: { type: String, required: true },
    __v: { type: String, default: '1.0' }
});

// For performance you would want to index unique fields like email

export const AdventureModel = mongoose.model('Adventure', AdventureSchema);