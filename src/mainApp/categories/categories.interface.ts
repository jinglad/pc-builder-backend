import { Model } from "mongoose";

export type ICategories = {
  name: string;
  route: string;
};

export type CategoriesModel = Model<ICategories>;
