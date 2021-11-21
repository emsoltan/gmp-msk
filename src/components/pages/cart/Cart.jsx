import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginCheck from "../account/loginform/LoginCheck";
import MyContext from "../../../context/MyContext";
import Library from "../library/Library";
import "./Cart.css";

const Cart = (props) => {
  const context = useContext(MyContext);
  const { siteData, auth } = context;
//   console.log(siteData[0].releases[1].albumName);
 const getAlbum = siteData[0].releases.map((album, index) => album.albumName);
  const [cartCount, setCartCount] = useState(0,getAlbum);
  const [cartItem, setCartItem] = useState([])
   
  const handleCartAdd = (e) => {
    setCartCount(cartCount + 1);
    setCartItem(getAlbum)
    return <li>{getAlbum}</li>;
  };
  const handleCartRemove = (e) => {

    setCartCount(cartCount - 1);
    setCartItem(cartItem - getAlbum)
  };


  return (
    <div className="cart_view">
      <h2>Coming soon</h2>
      <button onClick={handleCartAdd}>+</button>
      <button onClick={handleCartRemove}>-</button>
      <ul>
        <li className="text-info">{setCartItem}</li>
      </ul>
      <div>{cartCount}</div>
    </div>
  );
};

export default Cart;
