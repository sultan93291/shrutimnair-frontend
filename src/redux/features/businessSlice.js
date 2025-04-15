import { createSlice } from "@reduxjs/toolkit";

//  this is the switch intercation listener file it will store the data and cache it for user . 

// Initial state for user data
const initialState = {
  isBusinessActive: JSON.parse(localStorage.getItem("isBusinessPage")) || false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setIsBusinessActive: (state, action) => {
      state.isBusinessActive = action.payload;
      localStorage.setItem("isBusinessPage", JSON.stringify(action.payload));
    },
  },
});

// Export actions
export const { setIsBusinessActive } = userSlice.actions;

// Export reducer to be added to the store
export default userSlice.reducer;
