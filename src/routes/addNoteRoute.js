import { Router } from "express";

export const addNote = Router();

addNote.post("/addnote", (req, res) => {
  res.send("note Addes!");
});
