import bcrypt from "bcrypt";
import { User } from "../schema/userSchema.js";
import { connectDB } from "../config/connectDB.js";
import { closeDbConnection } from "../utils/closeConnection.js";
import jwt from "jsonwebtoken";
import { secret } from "../Constants.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    await connectDB();
    const user = await User.findOne({ email: email });

    if (!user) {
      res.send("User Not found!");
    } else {
      const userPwd = await bcrypt.compare(password, user.password);
      if (!userPwd) {
        res.send("Incorrect Password");
      } else {
        const token = jwt.sign({ email: email }, secret, { expiresIn: "30d" });
        res.json({ token, logedIN: true });
      }
    }
  } catch (e) {
    console.log(e);
  } finally {
    await closeDbConnection();
  }
};
