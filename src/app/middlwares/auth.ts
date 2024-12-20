import config from "../config";
import { User } from "../modules/user/user.model";
import { asyncCatch } from "../utility/asyncCatch";
import jwt, { JwtPayload } from "jsonwebtoken";
const auth = (...requireRole: string[]) => {
  return asyncCatch(async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
      throw new Error("you are not authorization!!");
    }
    const decoded = jwt.verify(
      token,
      config.jwt_scrict as string
    ) as JwtPayload;
    const { email, role } = decoded;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("you are not authorization!");
    }
    const checkUserStatus = user?.isBlocked;
    if (checkUserStatus) {
      throw new Error("you are not authorization!");
    }
    if (requireRole && !requireRole.includes(role)) {
      throw new Error("you are not authorization!");
    }
    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;
