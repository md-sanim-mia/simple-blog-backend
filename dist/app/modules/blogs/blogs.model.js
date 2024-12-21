"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blogs = void 0;
const mongoose_1 = require("mongoose");
const blogsSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose_1.Schema.Types.ObjectId, ref: "Users", required: false },
    isPublished: { type: Boolean, default: true },
}, {
    timestamps: true,
});
exports.Blogs = (0, mongoose_1.model)("Blogs", blogsSchema);
