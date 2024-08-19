import mongoose from "mongoose";
import { MongodbURI } from "../Constants.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(MongodbURI);
    console.log("Connected to the database Sucessfully");
  } catch (e) {
    console.log(e);
  }
};
