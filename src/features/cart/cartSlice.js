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
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let finalAmount = 0;
      let finalTotal = 0;

      state.cartItems.forEach((item) => {
        console.log("item is : ", item);
        finalAmount += item.amount;
        finalTotal += item.amount * item.price;
      });

      state.amount = finalAmount;
      state.total = finalTotal;
    },
  },
});

// console.log("cart slice  : ", cartReducer);
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartReducer.actions;
export default cartReducer.reducer;
