import { Router } from "express";
import { registerUser } from "../controllers/signupController.js";

export const signUpRoute = Router();

signUpRoute.post("/signup", registerUser);
