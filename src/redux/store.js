import { configureStore } from "@reduxjs/toolkit";
import businessSlice from "./features/businessSlice";
import tabslice from "./features/tabdataSlice";
import priceSlice from "./features/PricingSlice";

// this is the rtk store this store will provide data to the whole appp
export const store = configureStore({
  reducer: {
    businessReducer: businessSlice,
    tabReducer: tabslice,
    priceReducer: priceSlice,
  },
});

export default store;
