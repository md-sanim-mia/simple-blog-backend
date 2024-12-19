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
exports.userContllors = void 0;
const asyncCatch_1 = require("../../utility/asyncCatch");
const user_service_1 = require("./user.service");
const createUser = (0, asyncCatch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.userService.createUserForDb(req.body);
    res.status(200).json({
        success: true,
        message: "user success fully created",
        data: result,
    });
}));
const loginUser = (0, asyncCatch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.userService.loginUserForDb(req.body);
    res.status(200).json({
        success: true,
        message: "user login success fully ",
        data: result,
    });
}));
exports.userContllors = {
    createUser,
    loginUser,
};
