import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Category } from "../../models/Category";
import ajaxAdapter from "../../service/ajaxAdapter";

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

export const getAllCategoriesAsync = createAsyncThunk(
  "categories/getAll",
  async () =>
    await ajaxAdapter.get("/categories").then((res) => {
      if (res.status === 200) {
        return res.data;
      }
    })
);

export const addCategoryAsync = createAsyncThunk(
  "categories/add",
  async (data: Category, thunkajaxAdapter) => {
    await ajaxAdapter.post("/categories", data).then((res) => {
      if (res.status === 200) {
        thunkajaxAdapter.dispatch(getAllCategoriesAsync());
        return res.data;
      }
    });
  }
);

export const CategorySlice = createSlice({
  name: "Categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCategoriesAsync.fulfilled, (state, action) => {
      state.categoryList = action.payload;
    });
  },
});

export default CategorySlice.reducer;
export const {} = CategorySlice.actions;
