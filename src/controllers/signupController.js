import { User } from "../schema/userSchema.js";
import { connectDB } from "../config/connectDB.js";

export const registerUser = (req, res) => {
  const { fname, lname, email, password } = req.body;
  try {
    connectDB();
    const newUser = new User({
      firstName: fname,
      lastName: lname,
      email: email,
      password: password,
    });

    newUser.save();

    res.send("Sucessfully Registerd");
  } catch (e) {
    console.log(e);
  }
};
