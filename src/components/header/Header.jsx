import React, {useContext, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext"
import LoginForm from "../pages/account/loginform/LoginForm"
import RegisterForm from "../pages/account/registerForm/RegisterForm"
import  "./Header.css"
import gmpmsk_logo from "../../assets/gmpmsk_logo.png";
const Header = () => {
   const context = useContext(MyContext);
   const { auth } = context;
   const navigate = useNavigate();
  //  const accountView = (auth) => {
  //    !auth ? <LoginForm /> : <Account />;
  //  };

  //  useEffect(() => {
  //    !auth && navigate("/", { replace: true });
  //  }, [auth, navigate]);
    return (
      <header className="header">
        <div className="logobox">
          <img src={gmpmsk_logo}></img>
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
