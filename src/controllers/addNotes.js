import { Notes } from "../schema/noteSchema.js";
import { connectDB } from "../config/connectDB.js";
import { closeDbConnection } from "../utils/closeConnection.js";

export const addNote = async (req, res) => {
  const { email, title, body, important } = req.body;

  try {
    await connectDB();
    const newNote = new Notes({
      userEmail: email,
      noteTitle: title,
      noteContent: body,
      isImportant: important,
    });
    await newNote.save();

    res.send("Sucessfully Added");
  } catch (e) {
    console.log("Error Can't add note");
  } finally {
    await closeDbConnection();
  }
};
