import { Notes } from "../schema/noteSchema.js";
import { connectDB } from "../config/connectDB.js";

export const addNote = (req, res) => {
  const { email, title, body, important } = req.body;

  try {
    connectDB();
    const newNote = new Notes({
      userEmail: email,
      noteTitle: title,
      noteContent: body,
      isImportant: important,
    });
    newNote.save();

    res.send("Sucessfully Added");
  } catch (e) {
    console.log(e);
  }
};
