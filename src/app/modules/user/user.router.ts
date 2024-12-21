import express from "express";
import { userContllors } from "./user.contllor";
import { validationRequest } from "../../middlwares/validationRequest";
import { userValidations } from "./user.validation";
import auth from "../../middlwares/auth";

const router = express.Router();
router.post(
  "/register",
  validationRequest(userValidations.createUserValidationSchema),
  userContllors.createUser
);
router.post(
  "/login",
  validationRequest(userValidations.loginUserValidationSchema),
  userContllors.loginUser
);

export const userRouter = router;
