import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../models/Product";
import api from "../../service/api";

export interface ProductState {
  product: Product,
  productList: Array<Product>;
}

export const getAllProductsAsync = createAsyncThunk(
  "products/getAll",
  async () => 
    await api.get("/products").then(res => {
      if(res.status === 200){
        return res.data;
      }
    })
)

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
  extraReducers: (builder) => {
    builder.addCase(getAllProductsAsync.fulfilled, (state, action) => {
      state.productList = action.payload;
    })
  }
})

export default ProductSlice.reducer;
export const {} = ProductSlice.actions;
