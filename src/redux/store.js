import { configureStore } from "@reduxjs/toolkit";
import businessSlice from "./features/businessSlice";
import tabslice from "./features/tabdataSlice";

export const store = configureStore({
  reducer: {
    businessReducer: businessSlice,
    tabReducer: tabslice,
  },
});

export default store;
