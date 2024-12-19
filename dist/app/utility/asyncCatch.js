"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncCatch = void 0;
const asyncCatch = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((err) => next(err));
    };
};
exports.asyncCatch = asyncCatch;
