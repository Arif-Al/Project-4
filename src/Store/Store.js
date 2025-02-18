import { configureStore } from "@reduxjs/toolkit";

import locationReducer from "../Slice/Value";

export const store = configureStore({
  reducer: {
  
    Location: locationReducer,
  },
});
