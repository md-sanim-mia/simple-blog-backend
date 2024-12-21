"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handileZodError = void 0;
const handileZodError = (err) => {
    const errorSurces = err.issues.map((issue) => {
        return {
            path: issue.path[issue.path.length - 1],
            message: issue.message,
        };
    });
    const statusCode = 400;
    return {
        statusCode,
        message: " validation error ",
        errorSurces,
    };
};
exports.handileZodError = handileZodError;
