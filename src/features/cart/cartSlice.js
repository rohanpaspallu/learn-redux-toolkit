import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
});
export default cartReducer.reducer;
