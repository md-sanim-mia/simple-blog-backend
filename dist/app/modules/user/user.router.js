"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_contllor_1 = require("./user.contllor");
const validationRequest_1 = require("../../middlwares/validationRequest");
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
router.post("/register", (0, validationRequest_1.validationRequest)(user_validation_1.userValidations.createUserValidationSchema), user_contllor_1.userContllors.createUser);
router.post("/login", (0, validationRequest_1.validationRequest)(user_validation_1.userValidations.loginUserValidationSchema), user_contllor_1.userContllors.loginUser);
exports.userRouter = router;
