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
exports.adminContllors = void 0;
const asyncCatch_1 = require("../../utility/asyncCatch");
const admin_service_1 = require("./admin.service");
const blockedUser = (0, asyncCatch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const result = yield admin_service_1.adminServices.blockedUserForDb(userId);
    res.status(200).json({
        success: true,
        message: "User blocked successfully ",
    });
}));
const deleteBlog = (0, asyncCatch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield admin_service_1.adminServices.deleteBlogForDb(id);
    res.status(200).json({
        success: true,
        message: "deleted blgo successfully ",
    });
}));
exports.adminContllors = {
    blockedUser,
    deleteBlog,
};
