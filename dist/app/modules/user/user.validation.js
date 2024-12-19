"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidations = void 0;
const zod_1 = require("zod");
const createUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "name is required" }),
        email: zod_1.z.string({ required_error: "email is required" }),
        password: zod_1.z.string({ required_error: "password is required" }),
        role: zod_1.z.enum(["user", "admin"]).default("user"),
        isBlocked: zod_1.z.boolean().default(false),
    }),
});
const loginUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({ required_error: "email is required" }),
        password: zod_1.z.string({ required_error: "password is required" }),
    }),
});
exports.userValidations = {
    createUserValidationSchema,
    loginUserValidationSchema,
};
