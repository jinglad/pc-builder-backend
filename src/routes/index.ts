import express from "express";
import { categoriesRouter } from "../mainApp/categories/categories.route";
import { productsRouter } from "../mainApp/products/products.route";
const router = express.Router();

const moduleRoutes = [
  {
    path: "/categories",
    route: categoriesRouter,
  },
  {
    path: "/products",
    route: productsRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
