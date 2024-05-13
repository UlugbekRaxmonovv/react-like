import React from 'react'
import Empty from '../../components/empty/Empty'
import { useSelector } from 'react-redux'
import CartMain from './CartMain/CartMain'

const Cart = () => {
  let wishlist = useSelector(state => state.cart.value)
  console.log(wishlist);
  return (
    <div>
     {
      wishlist.length === 0
       ? 
       <Empty text="Cart"/>
       :
       <CartMain products={wishlist}/> 
     }
      
     
    </div>
  )
}

export default Cart