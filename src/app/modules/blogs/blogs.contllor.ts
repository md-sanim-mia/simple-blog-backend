import { asyncCatch } from "../../utility/asyncCatch";
import { blogsService } from "./blogs.service";

const createBlog = asyncCatch(async (req, res) => {
  const result = await blogsService.createBlogForDb(req.body);
  res.status(200).json({
    success: true,
    message: "blogs success fully created",
    data: result,
  });
});
const getAllBlogs = asyncCatch(async (req, res) => {
  const result = await blogsService.getAllBlogsForDb();
  res.status(200).json({
    success: true,
    message: "get  all blogs",
    data: result,
  });
});
const getSingleBlog = asyncCatch(async (req, res) => {
  const { blogId } = req.params;
  const result = await blogsService.getSingleBlogForDb(blogId);
  res.status(200).json({
    success: true,
    message: "get single blog",
    data: result,
  });
});
const updateSingleBlog = asyncCatch(async (req, res) => {
  const { blogId } = req.params;
  const playood = req.body;
  const result = await blogsService.updateSingleBlogForDb(blogId, playood);
  res.status(200).json({
    success: true,
    message: "update single blog",
    data: result,
  });
});
const deletedSingleBlog = asyncCatch(async (req, res) => {
  const { blogId } = req.params;
  const result = await blogsService.deletedSingleBlogForDb(blogId);
  res.status(200).json({
    success: true,
    message: "deleted single blog ",
    data: result,
  });
});

export const blogsContllors = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateSingleBlog,
  deletedSingleBlog,
};
