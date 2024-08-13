import { Router } from "express";

export const deleteNoteRoute = Router();

deleteNoteRoute.post("/deletenote", (req, res) => {
  res.send("note Deleted!");
});
