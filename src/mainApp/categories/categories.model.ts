import mongoose from "mongoose";
import { CategoriesModel, ICategories } from "./categories.interface";

const CategoriesSchema = new mongoose.Schema<ICategories, CategoriesModel>({
  name: { type: String, required: true },
  route: { type: String, required: true },
});

const Categories = mongoose.model<ICategories, CategoriesModel>(
  "Categories",
  CategoriesSchema
);

export default Categories;
