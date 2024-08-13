import { Router } from "express";

export const getNotesRoute = Router();

getNotesRoute.get("/notes", (req, res) => {
  res.send("all NOtes");
});
