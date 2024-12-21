import { getStatusCode, StatusCodes } from "http-status-codes";
import queryBuilder from "../../builder/query.builder";
import { AppError } from "../../Error/AppError";
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import { TBlogs } from "./blogs.interface";
import { Blogs } from "./blogs.model";

const createBlogForDb = async (playood: TBlogs, user: Partial<TUser>) => {
  const author = await User.findOne({ email: user.email });
  if (!author) {
    throw new Error("author is not found");
  }
  playood.author = author._id;
  const result = await Blogs.create(playood);
  return result;
};
const getAllBlogsForDb = async (query: Record<string, unknown>) => {
  const blogQuerys = new queryBuilder(Blogs.find().populate("author"), query)
    .search(["title"])
    .filter()
    .sort()
    .sortOrder();
  const result = await blogQuerys.modelQuery;
  return result;
};
const getSingleBlogForDb = async (id: string) => {
  const result = await Blogs.findById(id);
  if (!result) {
    throw new AppError(StatusCodes.NOT_FOUND, "this blog is not found");
  }
  return result;
};
const updateSingleBlogForDb = async (id: string, playood: Partial<TBlogs>) => {
  const updateBlog = await Blogs.findByIdAndUpdate(id, playood, {
    new: true,
    runValidators: true,
  });

  if (!updateBlog) {
    throw new AppError(StatusCodes.BAD_REQUEST, "blog update problem ");
  }
  return updateBlog;
};
const deletedSingleBlogForDb = async (id: string) => {
  const result = await Blogs.findByIdAndDelete(id);
  return result;
};

export const blogsService = {
  createBlogForDb,
  getAllBlogsForDb,
  getSingleBlogForDb,
  updateSingleBlogForDb,
  deletedSingleBlogForDb,
};
