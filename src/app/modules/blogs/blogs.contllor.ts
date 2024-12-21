import { asyncCatch } from "../../utility/asyncCatch";
import { TUser } from "../user/user.interface";
import { blogsService } from "./blogs.service";

const createBlog = asyncCatch(async (req, res) => {
  const user = req.user;
  const result = await blogsService.createBlogForDb(
    req.body,
    user as Partial<TUser>
  );
  res.status(200).json({
    success: true,
    message: "blogs success fully created",
    data: result,
  });
});
const getAllBlogs = asyncCatch(async (req, res) => {
  const result = await blogsService.getAllBlogsForDb(req?.query);
  res.status(200).json({
    success: true,
    message: "get  all blogs",
    data: result,
  });
});
const getSingleBlog = asyncCatch(async (req, res) => {
  const { id } = req.params;
  const result = await blogsService.getSingleBlogForDb(id);
  res.status(200).json({
    success: true,
    message: "get single blog",
    data: result,
  });
});
const updateSingleBlog = asyncCatch(async (req, res) => {
  const { id } = req.params;
  const playood = req.body;
  const result = await blogsService.updateSingleBlogForDb(id, playood);
  res.status(200).json({
    success: true,
    message: "update single blog",
    data: result,
  });
});
const deletedSingleBlog = asyncCatch(async (req, res) => {
  const { id } = req.params;
  const result = await blogsService.deletedSingleBlogForDb(id);
  res.status(200).json({
    success: true,
    message: "Blog deleted successfully",
  });
});

export const blogsContllors = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateSingleBlog,
  deletedSingleBlog,
};
