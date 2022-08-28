import { configureStore } from "@reduxjs/toolkit";
import productReducer  from "../features/productSlice";
import userReducer from "../features/userSlice";

const reducer = {
  reducer:{
    product:productReducer,
    user:userReducer,
  }
};

export const store = configureStore(reducer);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


