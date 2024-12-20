import { model, Schema } from "mongoose";
import { TBlogs } from "./blogs.interface";

const blogsSchema = new Schema<TBlogs>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "Users", required: false },
    isPublished: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);
export const Blogs = model<TBlogs>("Blogs", blogsSchema);
