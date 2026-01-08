import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseConn {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

let cached: MongooseConn = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn;

    if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');

    try {
        cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
            dbName: 'gym-management',
            bufferCommands: false,
        });

        cached.conn = await cached.promise;
        return cached.conn;
    } catch (error) {
        console.error('Database connection failed:', error);
        throw error;
    }
};
