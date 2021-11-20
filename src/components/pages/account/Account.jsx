import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../ui/UI.css";
import "./Account.css";
import LoginForm from "./loginform/LoginForm";
import Profile from "./Profile"
import MyContext from "../../../context/MyContext";



const Account = () => {
  const context = useContext(MyContext);
  const { auth } = context;
  const navigate = useNavigate();


  useEffect(() => {
    !auth && navigate("/", { replace: true });
  }, [auth, navigate]);

  return (
    <div className="section_view">
      <div className="account">
        {/* <h4>Account</h4> */}
        {!auth ? <LoginForm /> : <Profile />}
      </div>
    </div>
  );
};

export default Account;
