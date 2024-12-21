import express from "express";
import auth from "../../middlwares/auth";
import { adminContllors } from "./admin.contllor";

const router = express.Router();

router.patch("/users/:userId/block", auth("admin"), adminContllors.blockedUser);
router.delete("/blogs/:id", auth("admin"), adminContllors.deleteBlog);

export const adminRouter = router;
