import queryBuilder from "../../builder/query.builder";
import { TBlogs } from "./blogs.interface";
import { Blogs } from "./blogs.model";

const createBlogForDb = async (playood: TBlogs) => {
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
    throw new Error("this blog is not found");
  }
  return result;
};
const updateSingleBlogForDb = async (id: string, playood: Partial<TBlogs>) => {
  const updateBlog = await Blogs.findByIdAndUpdate(id, playood, {
    new: true,
    runValidators: true,
  });
  if (!updateBlog) {
    throw new Error("blog update problem ");
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
