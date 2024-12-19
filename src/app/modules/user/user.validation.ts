import { z } from "zod";

const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "name is required" }),
    email: z.string({ required_error: "email is required" }),
    password: z.string({ required_error: "password is required" }),
    role: z.enum(["user", "admin"]).default("user"),
    isBlocked: z.boolean().default(false),
  }),
});
const loginUserValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: "email is required" }),
    password: z.string({ required_error: "password is required" }),
  }),
});

export const userValidations = {
  createUserValidationSchema,
  loginUserValidationSchema,
};
