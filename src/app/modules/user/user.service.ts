import { TUser } from "./user.interface";
import { User } from "./user.model";
import bcrypt from "bcrypt";
const createUserForDb = async (playood: TUser) => {
  const isUserExits = await User.findOne({ email: playood.email });

  if (isUserExits) {
    throw new Error("user already exits for db");
  }
  const result = await User.create(playood);
  return result;
};

const loginUserForDb = async (playood: Partial<TUser>) => {
  //check user
  const isUserExits = await User.findOne({ email: playood.email });

  if (!isUserExits) {
    throw new Error("user is not found for db");
  }
  //chcek user stauts----

  const checkUserStatus = isUserExits?.isBlocked;
  if (checkUserStatus) {
    throw new Error("this user is blocked");
  }
  // comper current passwrod and database user password
  const comperPassword = await bcrypt.compare(
    playood.password as string,
    isUserExits.password
  );
  if (!comperPassword) {
    throw new Error("invilid email and password please try agin");
  }
  console.log(isUserExits);
  return isUserExits;
};

export const userService = {
  createUserForDb,
  loginUserForDb,
};
