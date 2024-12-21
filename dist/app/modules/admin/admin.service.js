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
exports.adminServices = void 0;
const http_status_codes_1 = require("http-status-codes");
const AppError_1 = require("../../Error/AppError");
const blogs_model_1 = require("../blogs/blogs.model");
const user_model_1 = require("../user/user.model");
const blockedUserForDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findById(id);
    if (!result) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, "user is not fuound ");
    }
    const checkUserStatus = result === null || result === void 0 ? void 0 : result.isBlocked;
    if (checkUserStatus) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.BAD_REQUEST, "user already blocked!");
    }
    const setBlock = yield user_model_1.User.findByIdAndUpdate(id, {
        isBlocked: true,
    });
    if (!setBlock) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.BAD_REQUEST, "field to blocked user");
    }
    return setBlock;
});
const deleteBlogForDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogs_model_1.Blogs.findById(id);
    if (!result) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, "blog is not fuound ");
    }
    const deleteBlog = yield blogs_model_1.Blogs.findByIdAndDelete(id);
    if (!deleteBlog) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.BAD_REQUEST, "field to deleted blog");
    }
    return deleteBlog;
});
exports.adminServices = {
    blockedUserForDb,
    deleteBlogForDb,
};
