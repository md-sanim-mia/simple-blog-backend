"use strict";
const http_status_codes_1 = require("http-status-codes");
const notFound = (req, res, next) => {
    res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Api Not found",
        error: "",
    });
    return;
};
module.exports = notFound;
