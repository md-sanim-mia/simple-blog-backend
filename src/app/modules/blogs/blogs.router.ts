import express from "express";
import { validationRequest } from "../../middlwares/validationRequest";
import { blogsValidation } from "./blogs.validation";
import { blogsContllors } from "./blogs.contllor";
import auth from "../../middlwares/auth";

const router = express.Router();
router.post(
  "/",
  validationRequest(blogsValidation.createBlogValidationSchema),
  auth("user"),
  blogsContllors.createBlog
);

router.get("/", blogsContllors.getAllBlogs);
router.get("/:id", blogsContllors.getSingleBlog);
router.patch(
  "/:id",
  validationRequest(blogsValidation.updateBlogValidationSchema),
  auth("user"),
  blogsContllors.updateSingleBlog
);
router.delete("/:id", auth("user"), blogsContllors.deletedSingleBlog);

export const blogRouter = router;
