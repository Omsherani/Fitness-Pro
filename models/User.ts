import mongoose, { Schema, Document, Model } from 'mongoose';

export type UserRole = 'member' | 'admin' | 'trainer';

export interface IUser extends Document {
    name: string;
    email: string;
    password?: string; // Optional if using OAuth later, but required for credentials
    image?: string;
    role: UserRole;
    membership?: {
        planId: mongoose.Types.ObjectId;
        startDate: Date;
        endDate: Date;
        isActive: boolean;
    };
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, select: false },
    image: { type: String },
    role: { type: String, enum: ['member', 'admin', 'trainer'], default: 'member' },
    membership: {
        planId: { type: Schema.Types.ObjectId, ref: 'Plan' },
        startDate: { type: Date },
        endDate: { type: Date },
        isActive: { type: Boolean, default: false },
    },
}, { timestamps: true });

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
export default User;
