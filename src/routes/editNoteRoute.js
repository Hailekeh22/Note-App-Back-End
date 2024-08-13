import { Router } from "express";

export const editNoteRoute = Router();

editNoteRoute.post("/editnote", (req, res) => {
  res.send("note edited!");
});
