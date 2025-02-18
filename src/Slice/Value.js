import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
  name: "Location",
  initialState: {
    Value: "",
  },
  reducers: {
    Addlocation: (state, action) => {
   
      state.Value = action.payload; 
    
      
    },
  },
});

export const { Addlocation } = locationSlice.actions;

export default locationSlice.reducer;
