import React from 'react'
import Empty from '../../components/empty/Empty'
import { useSelector } from 'react-redux'
import Products from '../../components/products/Products'

const Wishlist = () => {
  let wishlist = useSelector(state => state.wishlist.value)


  return (
    <div className='container'>

      {
        wishlist.length 
        ? 
        <Products title="Sevimlilar" products={wishlist} />
        :
        <Empty text="Wishlist"/>

      }
    </div>


  )
}

export default Wishlist