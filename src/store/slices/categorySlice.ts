import { createSlice } from "@reduxjs/toolkit";
import { Category } from "../../models/Category";

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

export const CategorySlice = createSlice({
  name: "Category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default CategorySlice.reducer;
export const {} = CategorySlice.actions;
