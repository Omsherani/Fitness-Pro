import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPlan extends Document {
    name: string;
    price: number;
    durationInMonths: number;
    features: string[];
    highlight?: boolean;
}

const PlanSchema: Schema = new Schema({
    name: { type: String, required: true },
    price: { type: String, required: true }, // Keeping as string to allow display formatting or number if calc needed
    durationInMonths: { type: Number, required: true },
    features: [{ type: String, required: true }],
    highlight: { type: Boolean, default: false },
}, { timestamps: true });

const Plan: Model<IPlan> = mongoose.models.Plan || mongoose.model<IPlan>('Plan', PlanSchema);
export default Plan;
