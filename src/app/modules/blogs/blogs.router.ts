import express from "express";
import { validationRequest } from "../../middlwares/validationRequest";
import { blogsValidation } from "./blogs.validation";
import { blogsContllors } from "./blogs.contllor";

const router = express.Router();
router.post(
  "/",
  validationRequest(blogsValidation.createBlogValidationSchema),
  blogsContllors.createBlog
);

router.get("/", blogsContllors.getAllBlogs);
router.get("/:blogId", blogsContllors.getSingleBlog);
router.patch(
  "/:blogId",
  validationRequest(blogsValidation.updateBlogValidationSchema),
  blogsContllors.getAllBlogs
);
router.delete("/:blogId", blogsContllors.deletedSingleBlog);

export const blogRouter = router;
