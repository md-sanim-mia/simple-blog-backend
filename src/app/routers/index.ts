import { Router } from "express";
import { userRouter } from "../modules/user/user.router";
import { blogRouter } from "../modules/blogs/blogs.router";
import { adminRouter } from "../modules/admin/admin.router";

const router = Router();
const modulesRouter = [
  { path: "/auth", route: userRouter },
  { path: "/blogs", route: blogRouter },
  { path: "/admin", route: adminRouter },
];

modulesRouter.forEach((rout) => router.use(rout.path, rout.route));

export default router;
