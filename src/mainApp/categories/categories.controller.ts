import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { categoriesService } from "./categories.service";

const getCategories = catchAsync(async (req, res) => {
  const result = await categoriesService.getCategories();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Success",
    data: result.data,
    meta: result.meta,
  });
});

export const categoriesController = {
  getCategories,
};
