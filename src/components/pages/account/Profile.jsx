import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../../context/MyContext";
import LoginForm from "./loginform/LoginForm";
import moss from "../../../assets/moss.jpg";
import "./Profile.css";

const Profile = () => {
  const context = useContext(MyContext);
  const { handleFormSubmit, auth } = context;
  const navigate = useNavigate();
  // useEffect(() => {
  //   !auth && navigate("/", { replace: true });
  // }, [auth, navigate]);
  return (
    <div className="profile-view">
      <h1 className="profile-title">Profile</h1>
      <div className="profile-content">
        <div className="profile-pic">
          <img src={moss} alt="the moss"></img>
        </div>
        <ul>
          <li>
            <div className="entry">Name</div>
            <div className="value">Moss</div>
          </li>
          <li>
            <div className="entry">User Name</div>
            <div className="value">Word</div>
          </li>
          <li>
            <div className="entry">Email Address</div>
            <div className="value">moss@moss.com</div>
          </li>
          <li>
            
            <div className="entry">WishList</div>
            <div className="value">5</div>
          </li>
        </ul>
        <button className="logout" onClick={(e) => handleFormSubmit(e)}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
