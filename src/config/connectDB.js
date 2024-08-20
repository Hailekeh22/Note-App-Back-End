import mongoose from "mongoose";
import { MongodbURI } from "../Constants.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(MongodbURI);
  } catch (e) {
    console.log("Error Happend");
  }
};
