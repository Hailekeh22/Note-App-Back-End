import { Router } from "express";
import { addNote } from "../controllers/addNotes.js";

export const addNoteRoute = Router();

addNoteRoute.post("/addnote", addNote);
