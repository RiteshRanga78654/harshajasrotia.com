import mongoose from "mongoose";

export const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("database is connected");
  } catch (error) {
    console.log(`${error} database is not connected`);
  }
};
