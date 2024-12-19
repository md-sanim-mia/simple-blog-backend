import express from "express";
import { userContllors } from "./user.contllor";

const router = express.Router();
router.post("/register", userContllors.createUser);
router.post("/login", userContllors.loginUser);

export const userRouter = router;
