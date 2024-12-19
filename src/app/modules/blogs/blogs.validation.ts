import { z } from "zod";

const createBlogValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: "title is required" }),
    content: z.string({ required_error: "content is required" }),
    author: z.string({ required_error: "author is required" }),
  }),
});
const updateBlogValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    content: z.string().optional(),
  }),
});

export const blogsValidation = {
  createBlogValidationSchema,
  updateBlogValidationSchema,
};
