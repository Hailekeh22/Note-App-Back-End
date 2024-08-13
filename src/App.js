import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Routes } from "./routes/routes.js";
import { connectDB } from "./config/connectDB.js";

export const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", Routes.loginRoute);
app.use("/user", Routes.signUpRoute);
app.use("/notes", Routes.addNoteRoute);
app.use("/notes", Routes.deleteNoteRoute);
app.use("/notes", Routes.editNoteRoute);
app.use("/notes", Routes.getNotesRoute);
