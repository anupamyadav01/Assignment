import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/L&RSystem`);
    console.log("Server connected to the database");
  } catch (error) {
    console.log("Server didn't connect to the database", error);
  }
};
