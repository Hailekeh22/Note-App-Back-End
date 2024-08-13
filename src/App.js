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
app.use("/notes", Routes.addNote);
app.use("/notes", Routes.deleteNote);
app.use("/notes", Routes.editNote);
app.use("/notes", Routes.getNotes);

connectDB();
