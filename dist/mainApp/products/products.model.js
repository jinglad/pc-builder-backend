"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ProductSchema = new mongoose_1.default.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, default: 0 },
    description: { type: String, required: true },
    category: { type: String, required: true },
    categoryRoute: { type: String, require: true },
    status: { type: String, required: true },
    keyfeature: { type: String, required: true },
    individiualRating: { type: Number, default: 0 },
    avgRating: { type: Number, default: 0 },
    featured: { type: Boolean, default: false },
    reviews: [
        {
            name: { type: String, required: true },
            review: { type: String, required: true },
        },
    ],
});
const Products = mongoose_1.default.model("Products", ProductSchema);
exports.default = Products;
