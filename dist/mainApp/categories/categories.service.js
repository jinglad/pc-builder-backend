"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesService = void 0;
const categories_model_1 = __importDefault(require("./categories.model"));
const getCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield categories_model_1.default.find();
    return {
        meta: {
            page: 1,
            limit: result.length,
            total: result.length,
        },
        data: result,
    };
});
exports.categoriesService = {
    getCategories,
};
