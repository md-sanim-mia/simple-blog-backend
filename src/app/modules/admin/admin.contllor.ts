import { asyncCatch } from "../../utility/asyncCatch";
import { adminServices } from "./admin.service";

const blockedUser = asyncCatch(async (req, res) => {
  const { userId } = req.params;
  const result = await adminServices.blockedUserForDb(userId);

  res.status(200).json({
    success: true,
    message: "User blocked successfully ",
  });
});
const deleteBlog = asyncCatch(async (req, res) => {
  const { id } = req.params;
  const result = await adminServices.deleteBlogForDb(id);

  res.status(200).json({
    success: true,
    message: "deleted blgo successfully ",
  });
});

export const adminContllors = {
  blockedUser,
  deleteBlog,
};
