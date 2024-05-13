import React from 'react'
import "./Navbar.css"
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar '>
      <div className="container navbar_all">
      <NavLink className="navbar__logo" to={"/"}>
          <span>Logo</span>
        </NavLink>
        <NavLink to={"/wishlist"}>
          <FaRegHeart/>
        </NavLink>
        <NavLink to={"/cart"}>
          <IoCartOutline/>
        </NavLink>
        <NavLink to={"/login"}>
         Login
        </NavLink>
      </div>
   
    </div>
  )
}

export default Navbar