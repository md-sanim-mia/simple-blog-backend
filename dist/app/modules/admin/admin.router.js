"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlwares/auth"));
const admin_contllor_1 = require("./admin.contllor");
const router = express_1.default.Router();
router.patch("/users/:userId/block", (0, auth_1.default)("admin"), admin_contllor_1.adminContllors.blockedUser);
router.delete("/blogs/:id", (0, auth_1.default)("admin"), admin_contllor_1.adminContllors.deleteBlog);
exports.adminRouter = router;
