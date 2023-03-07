import { configureStore } from '@reduxjs/toolkit';
import productListReducer from './features/productFeatures/productListSlice';
const store = configureStore({
  reducer: {
    productList: productListReducer,
  },
});

export default store;
