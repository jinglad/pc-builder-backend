import { Model } from "mongoose";

export interface IReview {
  name: string;
  review: string;
}

export interface IProduct {
  image: string;
  name: string;
  price: number;
  description: string;
  category: string;
  categoryRoute: string;
  status: string;
  keyfeature: string;
  individiualRating: number;
  avgRating: number;
  featured: boolean;
  reviews: IReview[];
}

export type ProductModel = Model<IProduct>;

export type IProductFilters = {
  searchTerm?: string;
  category?: string;
  featured?: boolean;
};
