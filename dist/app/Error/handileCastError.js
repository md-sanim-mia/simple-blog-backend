"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handileCastError = (err) => {
    const errorSurces = [
        {
            path: err.path,
            message: err.message,
        },
    ];
    const statusCode = 400;
    return {
        statusCode,
        message: " Invalid Id ",
        errorSurces,
    };
};
exports.default = handileCastError;
