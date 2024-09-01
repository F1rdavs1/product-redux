import { combineReducers } from "redux";
import { getProduct } from "./getProducts";
import { likeList } from "./likeList";
import { buyList } from "./buyList"; 
import { savedProduct } from "./savedProduct";

export const rootReducer = combineReducers({
  getProduct,
  likeList,
  savedProduct,
  buyList
});
