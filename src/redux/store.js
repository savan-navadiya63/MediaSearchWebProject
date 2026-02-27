import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/serchSlice";
 
export const store = configureStore({

  reducer: {
    search: searchReducer,  // add search reducer to the store
  },

});