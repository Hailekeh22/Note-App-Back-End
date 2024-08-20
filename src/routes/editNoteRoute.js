import { Router } from "express";
import { editNote } from "../controllers/editNote.js";

export const editNoteRoute = Router();

editNoteRoute.post("/editnote", editNote);
