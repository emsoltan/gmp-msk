import React, {useContext} from 'react'
import { Link} from "react-router-dom";
import MyContext from "../../context/MyContext"

import  "./Header.css"
import gmpmsk_logo from "../../assets/gmpmsk_logo.png";
const Header = () => {
   const context = useContext(MyContext);
   const { auth } = context;

    return (
      <header className="header">
        <div className="logobox">
          <img src={gmpmsk_logo} alt="logo"></img>
          {/* <h1>GMPMSK</h1> */}
        </div>
        <nav className="navbar">
          <ul className="navlist">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/library">Library</Link>
            </li>
            <li>
              {!auth ? (
                <Link to="/login">Login</Link>
              ) : (
                <Link to="/account">Account</Link>
              )}
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Header
