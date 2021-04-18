import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./weatherReducers";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});
export default reducers;