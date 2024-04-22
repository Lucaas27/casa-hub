import mongoose from 'mongoose';

let connected = false;

const connDB = async () => {
  mongoose.set('strictQuery', true);

  // If the database is already connected, don't connect again
  if (connected) {
    console.log('Database is already connected');
    return;
  }

  // Connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: 'casahub',
    });
    connected = true;
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
};

export default connDB;
