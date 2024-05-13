import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
      value: JSON.parse(localStorage.getItem("carts")) || [],
    },
  reducers: {
    addToCart(state, action) {
      let index = state.value.findIndex((el) => el?.id === action?.payload?.id);
      if (index < 0) {
        state.value = [...state.value, { ...action.payload, quantity: 1 }];
      }
      localStorage.setItem("carts", JSON.stringify(state.value))
    },
    incrementCartQuantity(state,action) {
      let index = state.value.findIndex((el) => el?.id === action?.payload?.id);
      state.value[index].quantity += 1;
      localStorage.setItem("carts", JSON.stringify(state.value))
    },
    decrementCartQuantity(state,action) {
      let index = state.value.findIndex((el) => el?.id === action?.payload?.id);
      state.value[index].quantity -= 1;
      localStorage.setItem("carts", JSON.stringify(state.value))
    },
    removeItemFromCart(state,action) {
      state.value = state.value.filter((el) => el.id !== action.payload.id)
      localStorage.setItem("carts", JSON.stringify(state.value))

    },
    removeAllItemsFromCart(state,action) {
      return state = []
      localStorage.setItem("carts", JSON.stringify(state.value))

    },
  },
});

export const {
  addToCart,
  decrementCartQuantity,
  incrementCartQuantity,
  removeAllItemsFromCart,
  removeItemFromCart,
} = cartSlice.actions;

export default cartSlice.reducer