import { Router } from "express";
import { userRouter } from "../modules/user/user.router";

const router = Router();
const modulesRouter = [{ path: "/auth", route: userRouter }];

modulesRouter.forEach((rout) => router.use(rout.path, rout.route));

export default router;
