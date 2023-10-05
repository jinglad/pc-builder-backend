import { SortOrder } from "mongoose";
import { paginationHelpers } from "../../helpers/paginationHelpers";
import { IGenericResponse } from "../../interface/common";
import { IPaginationOptions } from "../../interface/pagination";
import { productSearchableFields } from "./product.constant";
import { IProduct, IProductFilters } from "./products.interface";
import Products from "./products.model";

const getProducts = async (
  filters: IProductFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IProduct[]>> => {
  const { limit, page, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: productSearchableFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $paginationOptions: "i",
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Products.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Products.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getProduct = async (id: string): Promise<IProduct | null> => {
  return await Products.findById(id);
};

export const productsService = {
  getProducts,
  getProduct,
};
