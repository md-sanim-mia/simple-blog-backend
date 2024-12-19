import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config";
const userSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: 0 },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    isBlocked: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const password = this.password;
  if (!password) {
    throw new Error("password is requried");
  }
  const hasPassword = await bcrypt.hash(password, Number(config.sol_Password));
  if (!hasPassword) {
    throw new Error("bcrypt solt generated problem");
  }
  this.password = hasPassword;

  next();
});

export const User = model<TUser>("Users", userSchema);
