import { Router } from "express";

export const getNotes = Router();

getNotes.get("/notes", (req, res) => {
  res.send("all NOtes");
});
