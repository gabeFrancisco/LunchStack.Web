import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AuthSlice } from "./slices/authSlice";
import { CategorySlice } from "./slices/categorySlice";
import { ProductSlice } from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    categories: CategorySlice.reducer,
    products: ProductSlice.reducer
  },
  devTools: true,
}); 

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;


