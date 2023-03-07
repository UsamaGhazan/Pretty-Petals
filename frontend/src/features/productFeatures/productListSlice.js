import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  products: [],
  error: '',
};

export const listProducts = createAsyncThunk('ProductList', async () => {
  try {
    console.log('list products is working');
    const { data } = await axios.get(`/api/products`);
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
});

const productListSlice = createSlice({
  name: 'ProductList',
  initialState,
  extraReducers: {
    [listProducts.pending]: state => {
      return {
        loading: true,
      };
    },
    [listProducts.fulfilled]: (state, action) => {
      return {
        loading: false,
        products: action.payload,
      };
    },
    [listProducts.rejected]: (state, action) => {
      return {
        loading: true,
        error: action.payload,
      };
    },
  },
});

export default productListSlice.reducer;
