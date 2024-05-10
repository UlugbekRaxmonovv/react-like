import { configureStore  } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import wishlistSlice from '../pages/wishlist/wishlistSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    wishlist: wishlistSlice,
    // cart: cartSlice,
  },
})
