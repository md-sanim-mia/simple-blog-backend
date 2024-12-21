import { NextFunction, Request, Response } from "express";
import config from "../config";
import { AppError } from "../Error/AppError";
import handileCastError from "../Error/handileCastError";
import handileValidationErrors from "../Error/handileValidationError";
import { handileZodError } from "../Error/handileZodError";
import { ZodError } from "zod";
import { TErrorSource } from "../interface/error.interface";

const gogbalerrorhandiler = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // -------- difiend defult value ---------
  let statusCode = err.statuscode || 500;
  let message = err.message || "somthing waent wrong";

  let errorSurces: TErrorSource = [
    { path: "", message: "somthing waent wrong" },
  ];

  // --------zood validation error hadile ---------
  if (err instanceof ZodError) {
    const simplifiedError = handileZodError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSurces = simplifiedError.errorSurces;
    // --------mongoose validatin  error hadile ---------
  } else if (err?.name === "ValidationError") {
    const simplifiedError = handileValidationErrors(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSurces = simplifiedError.errorSurces;

    // --------mongoose cast  error hadile ---------
  } else if (err?.name === "CastError") {
    const simplifiedError = handileCastError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSurces = simplifiedError.errorSurces;
  } else if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
    errorSurces = [
      {
        path: "",
        message: err.message,
      },
    ];
  } else if (err instanceof Error) {
    message = err.message;
    errorSurces = [
      {
        path: "",
        message: err.message,
      },
    ];
  }

  // -------- success full send error message fontend  ---------
  res.status(statusCode).json({
    success: false,
    message,
    errorSurces,
    stack: config.node_env === "development" ? err?.stack : null,
  });
  return;
};

export = gogbalerrorhandiler;
