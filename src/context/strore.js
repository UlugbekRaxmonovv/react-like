import { configureStore  } from '@reduxjs/toolkit'
import wishlistSlice from '../pages/wishlist/wishlistSlice'
import cartSlice from '../pages/cart/cartSlice'

export const store = configureStore({
  reducer: {
    wishlist: wishlistSlice,
    cart: cartSlice,
  },
})
