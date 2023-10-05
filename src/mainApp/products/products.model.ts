import mongoose from "mongoose";
import { IProduct, ProductModel } from "./products.interface";

const ProductSchema = new mongoose.Schema<IProduct, ProductModel>({
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

const Products = mongoose.model<IProduct, ProductModel>(
  "Products",
  ProductSchema
);

export default Products;
