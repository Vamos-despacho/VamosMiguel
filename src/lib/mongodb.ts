// import mongoose from "mongoose";
// const { MONGODB_URI } = process.env;
// export const connectDB = async () => {
//     console.log(MONGODB_URI)
//     try {
//         const { connection } = await mongoose.connect(MONGODB_URI as string);
//         if (connection.readyState === 1) {
//             return Promise.resolve(true);
//         }
//     } catch (error) {
//         console.error(error);
//         return Promise.reject(error);
//     }
// };

import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI || '');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error: any) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
