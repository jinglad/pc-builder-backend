import httpStatus from "http-status";
import { paginationFields } from "../../constants/pagination";
import catchAsync from "../../shared/catchAsync";
import pick from "../../shared/pick";
import sendResponse from "../../shared/sendResponse";
import { productFilterableFields } from "./product.constant";
import { IProduct } from "./products.interface";
import { productsService } from "./products.service";

const getProducts = catchAsync(async (req, res) => {
  const filters = pick(req.query, productFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await productsService.getProducts(filters, paginationOptions);

  sendResponse<IProduct[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products fetched successfully",
    meta: result.meta,
    data: result.data,
  });
});

const getProduct = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await productsService.getProduct(id);

  sendResponse<IProduct>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product fetched successfully",
    data: result,
  });
});

export const productsController = {
  getProducts,
  getProduct,
};
