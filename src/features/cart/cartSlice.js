import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  cartItems: [],
  amount: 4,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((e) => console.log(e));
});

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
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

// console.log("cart slice  : ", cartReducer);
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartReducer.actions;
export default cartReducer.reducer;
