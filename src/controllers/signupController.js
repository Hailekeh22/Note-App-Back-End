import { User } from "../schema/userSchema.js";
import { connectDB } from "../config/connectDB.js";
import bcrypt from "bcrypt";
import { closeDbConnection } from "../utils/closeConnection.js";

export const registerUser = async (req, res) => {
  const { fname, lname, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    await connectDB();
    const newUser = new User({
      firstName: fname,
      lastName: lname,
      email: email,
      password: hashedPassword,
    });

    await newUser.save();

    res.send("Sucessfully Registerd");
  } catch (e) {
    console.log("Error Happend");
  } finally {
    await closeDbConnection();
  }
};
