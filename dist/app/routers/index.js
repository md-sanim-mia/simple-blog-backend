"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_router_1 = require("../modules/user/user.router");
const blogs_router_1 = require("../modules/blogs/blogs.router");
const admin_router_1 = require("../modules/admin/admin.router");
const router = (0, express_1.Router)();
const modulesRouter = [
    { path: "/auth", route: user_router_1.userRouter },
    { path: "/blogs", route: blogs_router_1.blogRouter },
    { path: "/admin", route: admin_router_1.adminRouter },
];
modulesRouter.forEach((rout) => router.use(rout.path, rout.route));
exports.default = router;
