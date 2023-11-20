import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 5,
  total: 0,
  isLoading: true,
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
});
export default cartReducer.reducer;
