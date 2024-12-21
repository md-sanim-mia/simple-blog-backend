import { asyncCatch } from "../../utility/asyncCatch";
import { userService } from "./user.service";

const createUser = asyncCatch(async (req, res) => {
  const result = await userService.createUserForDb(req.body);

  res.status(200).json({
    success: true,
    message: "user success fully created",
    data: result,
  });
});
const loginUser = asyncCatch(async (req, res) => {
  const result = await userService.loginUserForDb(req.body);

  res.status(200).json({
    success: true,
    message: "user login success fully ",
    data: result,
  });
});
const getAllUsers = asyncCatch(async (req, res) => {
  const result = await userService.getAllUserForDb();

  res.status(200).json({
    success: true,
    message: "user success fully find",
    data: result,
  });
});
const getSingleUser = asyncCatch(async (req, res) => {
  const { userId } = req.params;
  const result = await userService.getSingleUserForDb(userId);

  res.status(200).json({
    success: true,
    message: "get success fullu single user ",
    data: result,
  });
});
export const userContllors = {
  createUser,
  loginUser,
  getAllUsers,
  getSingleUser,
};
