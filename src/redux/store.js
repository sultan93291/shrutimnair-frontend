import { configureStore } from "@reduxjs/toolkit";
import businessSlice from "./features/businessSlice";
import tabslice from "./features/tabdataSlice";
import priceSlice from "./features/PricingSlice";

export const store = configureStore({
  reducer: {
    businessReducer: businessSlice,
    tabReducer: tabslice,
    priceReducer: priceSlice,
  },
});

export default store;
