import mongoose from "mongoose";

export const closeDbConnection = async () => {
  await mongoose.disconnect();
};
