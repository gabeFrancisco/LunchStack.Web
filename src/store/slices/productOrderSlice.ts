import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductOrder } from "../../models/ProductOrder";

export interface ProductOrderState{
  productOrder: ProductOrder,
  productOrderList: Array<ProductOrder>;
}

const initialState: ProductOrderState = {
  productOrder: {
    productId: 0,
    quantity: 0,
  },
  productOrderList: new Array<ProductOrder>
}

export const ProductOrderSlice = createSlice({
  name: "ProductOrders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
})

export default ProductOrderSlice.reducer;
export const { } = ProductOrderSlice.actions;