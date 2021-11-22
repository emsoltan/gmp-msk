import React, { useState } from "react";
import MyContext from "./MyContext";
import siteData from "./siteData";

const MyProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  
  const USER = process.env.REACT_APP_USER;
  const PASSWORD = process.env.REACT_APP_PASSWORD;
  const [form, setForm] = useState({ user: "", password: "" });
  const [auth, setAuth] = useState(false);
  const addToCart = (album) => {
    const addedItem = cartItems.find((item) => item.id === album.id);
    if (addedItem === undefined) {
      setCartItems([...cartItems, { ...album, quantity: 1 }]);
    } else {
      addedItem.quantity += 1;
      const index = cartItems.indexOf(addedItem);
      const clone = [...cartItems];
      clone.splice(index, 1, addedItem);
      setCartItems(clone);
    }
  };

  const decreaseQuantity = (album) => {
    const decreasedItem = cartItems.find((item) => item.id === album.id);
    const index = cartItems.indexOf(decreasedItem);
    decreasedItem.quantity -= 1;
    const clone = [...cartItems];
    decreasedItem.quantity >= 1
      ? clone.splice(index, 1, decreasedItem)
      : clone.splice(index, 1);
    setCartItems(clone);
  };
  const deleteItem = (album) => {
    const deletedItems = cartItems.find((item) => item.id === album.id);
    const index = cartItems.indexOf(deletedItems);

    const clone = [...cartItems];
    clone.splice(index, 1);
    setCartItems(clone);
  };

  const calcTotal = (album)=> {
    const totalPrice = cartItems.reduce((total,next)=> total+(next.price * next.quantity),0)
return totalPrice
  }

  const handleFormInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    form.user === USER && form.password === PASSWORD
      ? setAuth(true)
      : setAuth(false);
    setForm({ user: "", password: "" });
  };

  return (
    <MyContext.Provider
      value={{
        form,
        handleFormInput,
        handleFormSubmit,
        auth,
        siteData,
        cartItems,
        setCartItems,
        addToCart,
        decreaseQuantity,
        deleteItem,
        calcTotal,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
