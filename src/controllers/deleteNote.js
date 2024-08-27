import { connectDB } from "../config/connectDB.js";
import { Notes } from "../schema/noteSchema.js";
import { closeDbConnection } from "../utils/closeConnection.js";

export const deleteNote = async (req, res) => {
  const { noteId } = req.body;

  try {
    await connectDB();
    await Notes.findByIdAndDelete(noteId);
    res.send("Note Deleted");
  } catch (e) {
    console.log("error");
    res.send("Cant find the note");
  }
};
