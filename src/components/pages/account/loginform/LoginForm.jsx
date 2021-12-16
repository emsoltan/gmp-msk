import React, { useContext } from "react";
import MyContext from "../../../../context/MyContext";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import "./LoginModal.css";


const LoginForm = () => {
  const context = useContext(MyContext);
  const { form, handleFormInput, handleFormSubmit, auth } = context;
  const { user, password } = form;
  const navigate = useNavigate()
  const logged = !auth && (
    <div className="login_view">
      <div className="login_modal">
        <form className=".form">
          <input
            onChange={(e) => handleFormInput(e)}
            name="user"
            value={user}
            type="text"
            placeholder="UserName"
            className="form-input"
          />
          <input
            onChange={(e) => handleFormInput(e)}
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            className="form-input"
          />
          <button
            className="form-button"
            onClick={(e) => {
              handleFormSubmit(e);
              navigate("/logincheck");
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );

  return logged;
};
export default LoginForm;
