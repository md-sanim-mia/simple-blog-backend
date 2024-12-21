import { StatusCodes } from "http-status-codes";
import { AppError } from "../../Error/AppError";
import { Blogs } from "../blogs/blogs.model";
import { User } from "../user/user.model";

const blockedUserForDb = async (id: string) => {
  const result = await User.findById(id);
  if (!result) {
    throw new AppError(StatusCodes.NOT_FOUND, "user is not fuound ");
  }
  const checkUserStatus = result?.isBlocked;
  if (checkUserStatus) {
    throw new AppError(StatusCodes.BAD_REQUEST, "user already blocked!");
  }
  const setBlock = await User.findByIdAndUpdate(id, {
    isBlocked: true,
  });
  if (!setBlock) {
    throw new AppError(StatusCodes.BAD_REQUEST, "field to blocked user");
  }
  return setBlock;
};

const deleteBlogForDb = async (id: string) => {
  const result = await Blogs.findById(id);
  if (!result) {
    throw new AppError(StatusCodes.NOT_FOUND, "blog is not fuound ");
  }
  const deleteBlog = await Blogs.findByIdAndDelete(id);
  if (!deleteBlog) {
    throw new AppError(StatusCodes.BAD_REQUEST, "field to deleted blog");
  }
  return deleteBlog;
};

export const adminServices = {
  blockedUserForDb,
  deleteBlogForDb,
};
