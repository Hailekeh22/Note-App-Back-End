import { signUpRoute } from "./signupRoute.js";
import { loginRoute } from "./loginRoute.js";
import { getNotes } from "./getNotes.js";
import { editNote } from "./editNoteRoute.js";
import { deleteNote } from "./deleteNoteRoute.js";
import { addNote } from "./addNoteRoute.js";

export const Routes = {
  signUpRoute,
  loginRoute,
  addNote,
  deleteNote,
  editNote,
  getNotes,
};
