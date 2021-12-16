import React from 'react'
import LoginForm from "./LoginForm"
const LoginModal = (props) => {
   
      const confirmHandler = () => {
    props.onConfirm();
  };

  const cancelHandler = () => {
    props.onCancel();
  };
  return (
    <div className="login_modal">
      <button onClick={cancelHandler}>
        <LoginForm/>
      </button>
      <button onClick={confirmHandler}>Back to Library</button>
    </div>)
}

export default LoginModal
