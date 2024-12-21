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
exports.userService = void 0;
const http_status_codes_1 = require("http-status-codes");
const config_1 = __importDefault(require("../../config"));
const AppError_1 = require("../../Error/AppError");
const user_model_1 = require("./user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createUserForDb = (playood) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserExits = yield user_model_1.User.findOne({ email: playood.email });
    if (isUserExits) {
        throw new Error("user already exits for db");
    }
    const createUser = yield user_model_1.User.create(playood);
    const result = yield user_model_1.User.findOne({ email: playood.email }).select("email name");
    return result;
});
const loginUserForDb = (playood) => __awaiter(void 0, void 0, void 0, function* () {
    //check user
    const isUserExits = yield user_model_1.User.findOne({ email: playood.email }).select("+password");
    if (!isUserExits) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, "user is not found for db");
    }
    //chcek user stauts----
    const checkUserStatus = isUserExits === null || isUserExits === void 0 ? void 0 : isUserExits.isBlocked;
    if (checkUserStatus) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.BAD_REQUEST, "this user is blocked");
    }
    // comper current passwrod and database user password
    const comperPassword = yield bcrypt_1.default.compare(playood.password, isUserExits.password);
    if (!comperPassword) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.BAD_REQUEST, "invilid email and password please try agin");
    }
    const token = jsonwebtoken_1.default.sign({ email: isUserExits.email, role: isUserExits.role }, config_1.default.jwt_scrict, {
        expiresIn: "3d",
    });
    return { token };
});
const getSingleUserForDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findById(id).select("-password");
    if (!result) {
        throw new Error("user is not fuound ");
    }
    return result;
});
const getAllUserForDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.find({});
    return result;
});
exports.userService = {
    createUserForDb,
    loginUserForDb,
    getSingleUserForDb,
    getAllUserForDb,
};
