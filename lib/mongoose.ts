import exp from 'constants';
import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', ture);

    if(!process.env.MONGO_URL) {
       return console.error('MONGO_URL is not set');
    };
    if(isConnected) {
        console.log('using existing connection');
        return;
    }
    try {

    } catch (error) {
        console.error('error connecting to database', error);
    }
}