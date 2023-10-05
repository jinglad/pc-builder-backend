"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categories_route_1 = require("../mainApp/categories/categories.route");
const products_route_1 = require("../mainApp/products/products.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/categories",
        route: categories_route_1.categoriesRouter,
    },
    {
        path: "/products",
        route: products_route_1.productsRouter,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
