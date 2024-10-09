import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../models/Product";

export interface ProductState {
  product: Product,
  productList: Array<Product>;
}

const initialState: ProductState = {
  product: {
    id: 0,
    name: "",
    categoryId: 0,
    categoryName: "",
    price: 0,
    quantity: 0,
  },
  productList: new Array<Product>
}

export const ProductSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
})

export default ProductSlice.reducer;
export const {} = ProductSlice.actions;
