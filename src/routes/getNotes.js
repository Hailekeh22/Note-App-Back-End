import { Router } from "express";
import { getNotes } from "../controllers/getNotes.js";
import { verifyToken } from "../middlewares/verifyToken.js";

export const getNotesRoute = Router();

getNotesRoute.post("/allnotes", getNotes);
