import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Products } from "../types/products";


interface productState{
  products:Products[],
  type:string,
  status:string;
};

const initialState:productState = {
  products:[],
  type:"",
  status:""
};

const getProducts = createAsyncThunk( "product/getProduct", async (type:string)=> {
  try{
    const products = await axios.get("https://fakestoreapi.com/products");
    return [...products.data];
  }catch(err:any){
    return err.message;
  }
});


export const productSlice = createSlice({
  name:"products",
  initialState,
  reducers:{
    addValue:(state, action:PayloadAction<productState>)=>{
      state.products.concat([]);
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(getProducts.fulfilled, (state, action)=>{
      state.status = "success";
      state.products.push(...action.payload);
    })
    .addCase(getProducts.pending, (state, action)=>{
      state.status = "loading";
    })
    .addCase(getProducts.rejected, (state, action)=>{
      state.status = "reject";
    })
  }
});

export default productSlice.reducer;
export  const { addValue } = productSlice.actions;
export { getProducts };