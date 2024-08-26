import { connectDB } from "../config/connectDB.js";
import { closeDbConnection } from "../utils/closeConnection.js";

export const editNote = async (req, res) => {
  const { email, noteId, title, body } = req.body;

  try {
    await connectDB();

    if (title == "" && body == "") {
      res.send("You Must add edit values");
    } else if (body == "" && title !== "") {
    } else if (body !== "" && title == "") {
    }
  } catch (e) {
    console.log("Error Heppend");
  }
};
