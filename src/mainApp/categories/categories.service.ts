import { IGenericResponse } from "../../interface/common";
import { ICategories } from "./categories.interface";
import Categories from "./categories.model";

const getCategories = async (): Promise<IGenericResponse<ICategories[]>> => {
  const result = await Categories.find();

  return {
    meta: {
      page: 1,
      limit: result.length,
      total: result.length,
    },
    data: result,
  };
};

export const categoriesService = {
  getCategories,
};
