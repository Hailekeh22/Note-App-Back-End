import { connectDB } from "../config/connectDB.js";
import { Notes } from "../schema/noteSchema.js";
import { closeDbConnection } from "../utils/closeConnection.js";

export const editNote = async (req, res) => {
  const { noteId, newTitle, newBody } = req.body;

  try {
    await connectDB();

    if (newTitle == "" && newBody == "") {
      res.send("You muust add some values to edit!");
    } else if (newBody == "" && newTitle !== "") {
      await Notes.findByIdAndUpdate(noteId, {
        noteTitle: newTitle,
      });
      res.send("Note title changed sucessfully!");
    } else if (newBody !== "" && newTitle == "") {
      await Notes.findByIdAndUpdate(noteId, {
        noteContent: newBody,
      });
      res.send("Note body changed sucessfully!");
    } else if (newBody !== "" && newTitle !== "") {
      await Notes.findByIdAndUpdate(noteId, {
        noteTitle: newTitle,
        noteContent: newBody,
      });
      res.send("Note title and body changed sucessfully!");
    }
  } catch (e) {
    console.log("Error Heppend while editing notes");
    res.send(
      "Error happend! we cant find any note registed with the specified id"
    );
  } finally {
    await closeDbConnection();
  }
};
