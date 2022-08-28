import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userValue } from "../types/user"

interface userState{
  userValue:userValue[]
};

const initialState:userState = {
  userValue:[]
};


export const userSlice = createSlice({
  name:"users",
  initialState,
  reducers:{
    addName:(state, action:PayloadAction<userValue>)=>{
      console.log(action.payload, action.type);
      state.userValue.push(action.payload);
    }
  }
});

export default userSlice.reducer;
export  const { addName } = userSlice.actions;