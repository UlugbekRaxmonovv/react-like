import React from 'react'
import "./Products.css"
import { FaRegHeart, FaHeart  } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch,useSelector} from 'react-redux';
import { toggleEvent } from '../../pages/wishlist/wishlistSlice';
import { addToCart} from '../../pages/cart/cartSlice'
import { FaShoppingCart } from "react-icons/fa";


const Products = ({products,title}) => {
  let wishlist = useSelector(state => state.wishlist.value)
  let javob = useSelector(state => state.cart.value)


  const dispatch = useDispatch();
  let link = products?.map(product =>(
    <div key={product.id} className="card">
      <img src={product.images[0]} alt={product.name}/>
      <h5>{product.title}</h5>
      <p>{product.price}</p>
      <button onClick={() => dispatch(toggleEvent(product))}>
        {
          wishlist?.some(wishlist => wishlist.id == product.id)
          ?<FaHeart />
          :
        <FaRegHeart/>
        }
      </button>
      <button onClick={() => dispatch(addToCart(product))}>
{   
      javob?.some(javob => javob.id == product.id)
    ?<FaShoppingCart />
    :<IoCartOutline/>
}
      </button>
    </div>
  ))
  return (
    <div>
        <h2>{title}</h2>
        <div className="wrapper">
           {link}
        </div>
    </div>
  )
}

export default Products