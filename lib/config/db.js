// import mongoose from "mongoose";

// export const ConnectDb = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URL);
//     console.log("database is connected");
//   } catch (error) {
//     console.log(`${error} database is not connected`);
//   }
// };


import mongoose from "mongoose";

export const ConnectDb = async () => {
  if (mongoose.connection.readyState >= 1) return;

  await mongoose.connect(process.env.MONGODB_URL || "mongodb+srv://workingfor93:workingfor93@cluster0.sw4w8th.mongodb.net/harshajasrotia");
  console.log("Database Connected");
};
