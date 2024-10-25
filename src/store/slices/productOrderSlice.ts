import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductOrder } from "../../models/ProductOrder";

export interface ProductOrderState {
  productOrder: ProductOrder;
  productOrderList: Array<ProductOrder>;
  selectedProductOrderList: Array<ProductOrder>;
}

const initialState: ProductOrderState = {
  productOrder: {
    productId: 0,
    quantity: 0,
  },
  productOrderList: new Array<ProductOrder>(),
  selectedProductOrderList: new Array<ProductOrder>(),
};

export const ProductOrderSlice = createSlice({
  name: "ProductOrders",
  initialState,
  reducers: {
    addProductOrder: (
      state,
      { payload }: PayloadAction<{ productOrder: ProductOrder }>
    ) => {
      if (
        !state.selectedProductOrderList.find(
          (x) => x.productId === payload.productOrder.productId
        )
      ) {
        state.selectedProductOrderList.push(payload.productOrder);
      }
    },
  },
  extraReducers: (builder) => {},
});

export default ProductOrderSlice.reducer;
export const { addProductOrder } = ProductOrderSlice.actions;
