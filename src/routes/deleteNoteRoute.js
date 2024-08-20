import { Router } from "express";
import { deleteNote } from "../controllers/deleteNote.js";

export const deleteNoteRoute = Router();

deleteNoteRoute.post("/deletenote", deleteNote);
