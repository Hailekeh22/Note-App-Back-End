import { Router } from "express";

export const deleteNote = Router();

deleteNote.post("/deletenote", (req, res) => {
  res.send("note Deleted!");
});
