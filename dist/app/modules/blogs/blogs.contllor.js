"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogsContllors = void 0;
const asyncCatch_1 = require("../../utility/asyncCatch");
const blogs_service_1 = require("./blogs.service");
const createBlog = (0, asyncCatch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const result = yield blogs_service_1.blogsService.createBlogForDb(req.body, user);
    res.status(200).json({
        success: true,
        message: "blogs success fully created",
        data: result,
    });
}));
const getAllBlogs = (0, asyncCatch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogs_service_1.blogsService.getAllBlogsForDb(req === null || req === void 0 ? void 0 : req.query);
    res.status(200).json({
        success: true,
        message: "get  all blogs",
        data: result,
    });
}));
const getSingleBlog = (0, asyncCatch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield blogs_service_1.blogsService.getSingleBlogForDb(id);
    res.status(200).json({
        success: true,
        message: "get single blog",
        data: result,
    });
}));
const updateSingleBlog = (0, asyncCatch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const playood = req.body;
    const result = yield blogs_service_1.blogsService.updateSingleBlogForDb(id, playood);
    res.status(200).json({
        success: true,
        message: "update single blog",
        data: result,
    });
}));
const deletedSingleBlog = (0, asyncCatch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield blogs_service_1.blogsService.deletedSingleBlogForDb(id);
    res.status(200).json({
        success: true,
        message: "Blog deleted successfully",
    });
}));
exports.blogsContllors = {
    createBlog,
    getAllBlogs,
    getSingleBlog,
    updateSingleBlog,
    deletedSingleBlog,
};
