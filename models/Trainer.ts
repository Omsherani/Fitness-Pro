import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ITrainer extends Document {
    name: string;
    bio: string;
    specialties: string[];
    imageUrl: string;
    certifications: string[];
    socials?: {
        instagram?: string;
        linkedin?: string;
        twitter?: string;
    };
}

const TrainerSchema: Schema = new Schema({
    name: { type: String, required: true },
    bio: { type: String, required: true },
    specialties: [{ type: String }],
    imageUrl: { type: String, required: true },
    certifications: [{ type: String }],
    socials: {
        instagram: String,
        linkedin: String,
        twitter: String,
    },
}, { timestamps: true });

const Trainer: Model<ITrainer> = mongoose.models.Trainer || mongoose.model<ITrainer>('Trainer', TrainerSchema);
export default Trainer;
