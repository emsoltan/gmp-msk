import React, { useContext } from "react";

import MyContext from "../../../context/MyContext";

import "./Cart.css";

const Cart = () => {
  const context = useContext(MyContext);
  const { addToCart, decreaseQuantity, deleteItem, cartItems, calcTotal } =
    context;
  return (
    <div className="cart_view">
      <div className="content">
        {cartItems.length === 0 ? (
          <h2>Cart is Empty</h2>
        ) : (
          cartItems.map((album, index) => (
            <div key={index} className="cart-item">
              <div>{album.quantity}</div>
              <img src={album.image} alt="albumImage" />
              <h3>{album.albumName}</h3>
              <div className="cart-buttons">
                <button className="option" onClick={() => addToCart(album)}>
                  <img
                    src="https://img.icons8.com/material/24/000000/add.png"
                    alt="btn-icon"
                  />
                </button>
                <button
                  className="option"
                  onClick={() => decreaseQuantity(album)}
                >
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/minus.png"
                    alt="btn-icon"
                  />
                </button>
                <button className="option" onClick={() => deleteItem(album)}>
                  <img
                    src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-delete-miscellaneous-kiranshastry-solid-kiranshastry.png"
                    alt="btn-icon"
                  />
                </button>
              </div>
              <div>{album.price * album.quantity} €</div>
            </div>
          ))
        )}
      </div>
      <div className="final">
        <div className="total">
          <h3> Total : {calcTotal(cartItems).toFixed(2)} €</h3>
        </div>{" "}
        {cartItems.length > 0 && (
          <button className="checkout">
            <h3>Checkout</h3>
          </button>
        )}
      </div>
    </div>
  );
  // return (
  //   <div className="content">
  //     <div className="cart_view">
  //       {cartItems.length === 0 ? (
  //         <h2>Cart is Empty</h2>
  //       ) : (
  //         cartItems.map((album, index) => (
  //           <div className="cart-item">
  //             <div>{album.quantity}</div>
  //             <img src={album.image} alt="" />
  //             <h3>{album.albumName}</h3>
  //             <div className="cart-buttons">
  //               <button onClick={() => addToCart(album)}> +</button>
  //               <button onClick={() => decreaseQuantity(album)}>-</button>
  //               <button onClick={() => deleteItem(album)}>Delete</button>
  //             </div>
  //             <div>{album.price * album.quantity} $</div>
  //           </div>
  //         ))
  //       )}
  //     </div>
  //     <div className="final">
  //       <div className="total">Total Price: {calcTotal(cartItems).toFixed(2)} $ </div>
  //       <button className="checkout">Proceed to CheckOut</button>
  //     </div>
  //   </div>
  // );
};

export default Cart;
