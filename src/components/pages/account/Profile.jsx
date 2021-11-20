import React, { useContext, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import MyContext from "../../../context/MyContext";
import LoginForm from "./loginform/LoginForm";
import moss from "../../../assets/moss.jpg";

const Profile = () => {
    const context = useContext(MyContext);
    const { handleFormSubmit, auth } = context;
     const navigate = useNavigate();
      // useEffect(() => {
      //   !auth && navigate("/", { replace: true });
      // }, [auth, navigate]);
  return (
    <div>
      <h1>Profile</h1>
      <div>
        <div className="profile-pic">
          <img src={moss} alt="the moss"></img>
        </div>
        <ul>
          <li>Name: Moss</li>
          <li>User Name: Word</li>
          <li>Email Address: moss@moss.com </li>
          <li>WishList: 0</li>
          <li>
            {
              <button
                className="form-button"
                onClick={(e) => handleFormSubmit(e)}
              >
                Logout
              </button>
            }
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
