import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  mongoose_url: process.env.MONGODB_URL,
  sol_Password: process.env.PASSWORD_SOL,
  jwt_scrict: process.env.JWT_SCRICT,
};
