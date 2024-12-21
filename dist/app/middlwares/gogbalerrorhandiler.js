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
const config_1 = __importDefault(require("../config"));
const AppError_1 = require("../Error/AppError");
const handileCastError_1 = __importDefault(require("../Error/handileCastError"));
const handileValidationError_1 = __importDefault(require("../Error/handileValidationError"));
const handileZodError_1 = require("../Error/handileZodError");
const zod_1 = require("zod");
const gogbalerrorhandiler = (err, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // -------- difiend defult value ---------
    let statusCode = err.statuscode || 500;
    let message = err.message || "somthing waent wrong";
    let errorSurces = [
        { path: "", message: "somthing waent wrong" },
    ];
    // --------zood validation error hadile ---------
    if (err instanceof zod_1.ZodError) {
        const simplifiedError = (0, handileZodError_1.handileZodError)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSurces = simplifiedError.errorSurces;
        // --------mongoose validatin  error hadile ---------
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === "ValidationError") {
        const simplifiedError = (0, handileValidationError_1.default)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSurces = simplifiedError.errorSurces;
        // --------mongoose cast  error hadile ---------
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === "CastError") {
        const simplifiedError = (0, handileCastError_1.default)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSurces = simplifiedError.errorSurces;
    }
    else if (err instanceof AppError_1.AppError) {
        statusCode = err.statusCode;
        message = err.message;
        errorSurces = [
            {
                path: "",
                message: err.message,
            },
        ];
    }
    else if (err instanceof Error) {
        message = err.message;
        errorSurces = [
            {
                path: "",
                message: err.message,
            },
        ];
    }
    // -------- success full send error message fontend  ---------
    res.status(statusCode).json({
        success: false,
        message,
        errorSurces,
        stack: config_1.default.node_env === "development" ? err === null || err === void 0 ? void 0 : err.stack : null,
    });
    return;
});
module.exports = gogbalerrorhandiler;
