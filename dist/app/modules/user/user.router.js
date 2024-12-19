"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_contllor_1 = require("./user.contllor");
const router = express_1.default.Router();
router.post("/register", user_contllor_1.userContllors.createUser);
router.post("/login", user_contllor_1.userContllors.loginUser);
exports.userRouter = router;
