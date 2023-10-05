import express from "express";
import { productsController } from "./products.controller";

const router = express.Router();

router.get("/", productsController.getProducts);
router.get("/:id", productsController.getProduct);

export const productsRouter = router;
