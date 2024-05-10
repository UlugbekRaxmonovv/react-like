import React from 'react'
import { useSelector } from 'react-redux'
import "./Navbar.css"
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const count = useSelector(state => state.counter.value)
  return (
    <div className='navbar'>
        <NavLink className="navbar__logo" to={"/"}>
          <span>Logo</span>
        </NavLink>
        <NavLink to={"/wishlist"}>
          <FaRegHeart/>
        </NavLink>
        <NavLink to={"/cart"}>
          <IoCartOutline/>
        </NavLink>
    </div>
  )
}

export default Navbar