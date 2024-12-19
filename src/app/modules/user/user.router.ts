import express from "express";
import { userContllors } from "./user.contllor";
import { validationRequest } from "../../middlwares/validationRequest";
import { userValidations } from "./user.validation";

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
router.get("/", userContllors.getAllUsers);
router.get("/:userId", userContllors.getSingleUser);

export const userRouter = router;
