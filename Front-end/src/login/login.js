import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./login.scss";
import { useDispatch } from "react-redux";

function Login(props) {
  const [userName, setuserName] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="login-container">
      <div className="login">
        <div className="user-details">
          <h3>UserName</h3>
          <input
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
          />
        </div>
        <button
          className="btn"
          onClick={() => {
            if (userName) {
              props.history.push("/home");
              dispatch({ type: "getToken", payload: userName });
            } else {
              alert("Please provide user name");
            }
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default withRouter(Login);
