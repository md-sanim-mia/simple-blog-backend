"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRouter = void 0;
const express_1 = __importDefault(require("express"));
const validationRequest_1 = require("../../middlwares/validationRequest");
const blogs_validation_1 = require("./blogs.validation");
const blogs_contllor_1 = require("./blogs.contllor");
const auth_1 = __importDefault(require("../../middlwares/auth"));
const router = express_1.default.Router();
router.post("/", (0, validationRequest_1.validationRequest)(blogs_validation_1.blogsValidation.createBlogValidationSchema), (0, auth_1.default)("user"), blogs_contllor_1.blogsContllors.createBlog);
router.get("/", blogs_contllor_1.blogsContllors.getAllBlogs);
router.get("/:id", blogs_contllor_1.blogsContllors.getSingleBlog);
router.patch("/:id", (0, validationRequest_1.validationRequest)(blogs_validation_1.blogsValidation.updateBlogValidationSchema), (0, auth_1.default)("user"), blogs_contllor_1.blogsContllors.updateSingleBlog);
router.delete("/:id", (0, auth_1.default)("user"), blogs_contllor_1.blogsContllors.deletedSingleBlog);
exports.blogRouter = router;
