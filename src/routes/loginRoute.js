import { Router } from "express";
import { login } from "../controllers/loginController.js";

export const loginRoute = Router();

loginRoute.post("/login", login);
