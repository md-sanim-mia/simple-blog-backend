import { TUser } from "./user.interface";
import { User } from "./user.model";
import bcrypt from "bcrypt";
const createUserForDb = async (playood: TUser) => {
  const isUserExits = await User.findOne({ email: playood.email });

  if (isUserExits) {
    throw new Error("user already exits for db");
  }
  const createUser = await User.create(playood);
  const result = await User.findOne({ email: playood.email }).select(
    "email name"
  );
  return result;
};

const loginUserForDb = async (playood: Partial<TUser>) => {
  //check user
  const isUserExits = await User.findOne({ email: playood.email }).select(
    "+password"
  );

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
  const result = await User.findOne({ email: playood.email }).select(
    "email name"
  );
  return result;
};

const getSingleUserForDb = async (id: string) => {
  const result = await User.findById(id).select("-password");
  if (!result) {
    throw new Error("user is not fuound ");
  }
  return result;
};
const getAllUserForDb = async () => {
  const result = await User.find({}).select("-password");
  return result;
};

export const userService = {
  createUserForDb,
  loginUserForDb,
  getSingleUserForDb,
  getAllUserForDb,
};
