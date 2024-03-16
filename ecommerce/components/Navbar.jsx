"use client"
import React from "react";
import Link from "next/link";

import { AiOutlineShopping } from "react-icons/ai";
import {Cart} from "./"
import {useStateContexte} from "../contexte/StateContext"
const Navbar = () => {
  const {showCart,setShowCart,totalQuantities} = useStateContexte();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href={"/"}>Yahia's Store</Link>
      </p>
      <button type="button" className="cart-icon" onClick={()=> setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart/>}
    </div>
  );
};

export default Navbar;
