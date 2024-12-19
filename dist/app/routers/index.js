"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_router_1 = require("../modules/user/user.router");
const router = (0, express_1.Router)();
const modulesRouter = [{ path: "/auth", route: user_router_1.userRouter }];
modulesRouter.forEach((rout) => router.use(rout.path, rout.route));
exports.default = router;
