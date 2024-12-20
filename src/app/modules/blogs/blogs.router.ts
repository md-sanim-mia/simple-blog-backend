import express from "express";
import { validationRequest } from "../../middlwares/validationRequest";
import { blogsValidation } from "./blogs.validation";
import { blogsContllors } from "./blogs.contllor";
import auth from "../../middlwares/auth";

const router = express.Router();
router.post(
  "/",
  validationRequest(blogsValidation.createBlogValidationSchema),
  blogsContllors.createBlog
);

router.get("/", auth("user"), blogsContllors.getAllBlogs);
router.get("/:blogId", blogsContllors.getSingleBlog);
router.patch(
  "/:blogId",
  validationRequest(blogsValidation.updateBlogValidationSchema),
  blogsContllors.updateSingleBlog
);
router.delete("/:blogId", blogsContllors.deletedSingleBlog);

export const blogRouter = router;
