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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogsService = void 0;
const http_status_codes_1 = require("http-status-codes");
const query_builder_1 = __importDefault(require("../../builder/query.builder"));
const AppError_1 = require("../../Error/AppError");
const user_model_1 = require("../user/user.model");
const blogs_model_1 = require("./blogs.model");
const createBlogForDb = (playood, user) => __awaiter(void 0, void 0, void 0, function* () {
    const author = yield user_model_1.User.findOne({ email: user.email });
    if (!author) {
        throw new Error("author is not found");
    }
    playood.author = author._id;
    const result = yield blogs_model_1.Blogs.create(playood);
    return result;
});
const getAllBlogsForDb = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const blogQuerys = new query_builder_1.default(blogs_model_1.Blogs.find().populate("author"), query)
        .search(["title"])
        .filter()
        .sort()
        .sortOrder();
    const result = yield blogQuerys.modelQuery;
    return result;
});
const getSingleBlogForDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogs_model_1.Blogs.findById(id);
    if (!result) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, "this blog is not found");
    }
    return result;
});
const updateSingleBlogForDb = (id, playood) => __awaiter(void 0, void 0, void 0, function* () {
    const updateBlog = yield blogs_model_1.Blogs.findByIdAndUpdate(id, playood, {
        new: true,
        runValidators: true,
    });
    if (!updateBlog) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.BAD_REQUEST, "blog update problem ");
    }
    return updateBlog;
});
const deletedSingleBlogForDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogs_model_1.Blogs.findByIdAndDelete(id);
    return result;
});
exports.blogsService = {
    createBlogForDb,
    getAllBlogsForDb,
    getSingleBlogForDb,
    updateSingleBlogForDb,
    deletedSingleBlogForDb,
};
