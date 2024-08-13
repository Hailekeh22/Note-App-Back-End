import { Router } from "express";

export const editNote = Router();

editNote.post("/editnote", (req, res) => {
  res.send("note edited!");
});
