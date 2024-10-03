import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Category } from "../../models/Category";
import api from "../../service/api";

export interface CategoryState {
  category: Category;
  categoryList: Array<Category>;
}

const initialState: CategoryState = {
  category: {
    id: 0,
    name: "",
    color: "",
    workgroupId: 0,
  },
  categoryList: new Array<Category>(),
};

export const getAllAsync = createAsyncThunk(
  "categories/getAll", 
  async () => 
  await api.get("/categories").then((res) => {
    if(res.status === 200){
      return res.data;
    }
  })
);

export const CategorySlice = createSlice({
  name: "Category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllAsync.fulfilled, (state, action) => {
      state.categoryList = action.payload
    })
  },
});

export default CategorySlice.reducer;
export const {} = CategorySlice.actions;
