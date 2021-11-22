import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginCheck from "../account/loginform/LoginCheck";
import MyContext from "../../../context/MyContext";
import Library from "../library/Library";

import "./Cart.css";

const Cart = (props) => {
  const context = useContext(MyContext);
  const {
    addToCart,
    decreaseQuantity,
    deleteItem,
    siteData,
    auth,
    setCartItems,
    cartItems,
    calcTotal,
  } = context;

  return (
    <div className="cart_view">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <h2>Cart is Empty</h2>
      ) : (
        cartItems.map((album, index) => (
          <div key={index}>
            <div>
              <h3>{album.albumName}</h3>
              <div>Items:</div>
            </div>
            <button onClick={() => addToCart(album)}>+</button>
            <button onClick={() => decreaseQuantity(album)}>-</button>
            <button onClick={() => deleteItem(album)}>Delete this shit</button>
            <div>
              Price: {album.price} Quantity: {album.quantity}
            </div>
            <div>Total: {album.price * album.quantity}</div>
          </div>
        ))
      )}
      <div>Total Price: {(calcTotal(cartItems)).toFixed(2)} $ </div>
    </div>
  );
};

export default Cart;
