import { combineReducers } from "redux";
import { getProduct } from "./getProducts";
import { likeList } from "./likeList";
import { savedProduct } from "./savedProduct";
import { search } from "./search";
import { ACTIONS } from "./action";

export const rootReducer = combineReducers({
  getProduct,
  likeList,
  savedProduct,
  search,
  ACTIONS,
});
