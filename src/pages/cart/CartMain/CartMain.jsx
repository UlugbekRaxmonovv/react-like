import React from 'react';
import  './CsrdMain.css';
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch} from 'react-redux';
import {  decrementCartQuantity,  incrementCartQuantity,removeItemFromCart,removeAllItemsFromCart } from '../cartSlice'



const CartMain = ({products}) => {
  const dispatch = useDispatch();
  let carts =products?.reduce((a,b)  =>a +(b.price * b.quantity),0) 
    return (
        <div className='container'>
          
          <div className="hammasi_il">
          <div className="hammasi    ">
                <div className="hammasi-all">
                    <p>Products</p>
                </div>
               <div className="all">
               <div className="prici">
                    <p>Price</p>
                </div>
                <div className="prici">
                    <p>Quantity</p>
                </div>
                <div className="prici">
                    <p>Total</p>
                </div>
               </div>
            </div>
             <ul className="ul_link">
           {
             products?.map((inx) =>(
        
              <li className="li_link">
              <div className="img">
                  <img src={inx.images[0]} alt="" />
                  </div>
                  <div className="img">
                <p>{inx.title}</p>
                  </div>
                  <div className="img">
                  <p>{inx.price} USD</p>
                  </div>
                 <tr>
               <th>
               <div className="img">
                  <button onClick={() =>dispatch(incrementCartQuantity(inx)) }>+</button>
              </div>
               </th>
             <th>
             <div className="img">
                  <span>{inx.quantity}</span>
              </div>
             </th>
              <th>
              <div className="img">
                  <button disabled={inx.quantity <= 1} onClick={() =>dispatch(decrementCartQuantity(inx)) }>-</button>
              </div>
              </th>
                 </tr>
              <div className="img">
                    <span>{inx.price * inx.quantity}</span>
                  </div>
                  <div className="imgs">  
                  <button onClick={() =>dispatch(removeItemFromCart(inx))}><MdOutlineDelete/></button>
              </div>
           
              <div className="imgss">
                  <button onClick={() =>dispatch(removeAllItemsFromCart(inx))}>deletAll</button>
              </div>
              </li>
                
              ))
            }
       

            </ul>
            <div className="box_row">
            <p>Cart Totals</p>
            <div className="all1">
            </div>
            <h4>Coupon Apply</h4>
             <div className="hammasi_input">
             <div className="input_alt">
                    <input type="text"
                     placeholder='Enter coupon code here...' />
                </div>
                <div className="input_alt">
                    <button>Apply</button>
                </div>
             </div>
             <div className="pri_alt">
                <div className="pri_row">
                    <p>Subtotal</p>
                </div>
                <span>$2,683.00</span>
             </div>

             <div className="pri_alt">
                <div className="pri_row">
                    <p>Coupon Discount</p>
                </div>
                <span>(-) 00.00</span>
             </div>

             <div className="pri_alt">
                <div className="pri_row">
                    <p>Shiping</p>
                </div>
                <span>$16.00</span>
             </div>
             <div className="p1">
                <p>View shipping charge</p>
             </div>
             <div className="pri_alt">
                <div className="pri_row">
                    <h2>Shiping</h2>
                </div>
                <p>Jami:{carts} </p>
             </div>
            <div className="btn_button">
            <button>Proceed To Checkout</button>
             <button>Continue Shopping</button>
            </div>
          </div>
             </div>
          </div>
           
      
    );
}

export default CartMain;
