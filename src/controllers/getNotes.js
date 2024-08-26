import { connectDB } from "../config/connectDB.js";
import { Notes } from "../schema/noteSchema.js";
import { closeDbConnection } from "../utils/closeConnection.js";

export const getNotes = async (req, res) => {
  const { email } = req.body;

  try {
    await connectDB();
    const notes = await Notes.find({ userEmail: email });

    if (notes) {
      res.send(notes);
    } else {
      res.send("No Items FOund");
    }
  } catch (e) {
    console.log("error");
  } finally {
    closeDbConnection();
  }
};
