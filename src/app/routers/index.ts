import { Router } from "express";
import { userRouter } from "../modules/user/user.router";
import { blogRouter } from "../modules/blogs/blogs.router";

const router = Router();
const modulesRouter = [
  { path: "/auth", route: userRouter },
  { path: "/blog", route: blogRouter },
];

modulesRouter.forEach((rout) => router.use(rout.path, rout.route));

export default router;
