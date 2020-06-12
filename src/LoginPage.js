import React, { useState } from "react";
import "./LoginPage.css";
import HighlightIcon from "@material-ui/icons/Highlight";
import Cookies from "js-cookie";

function LoginPage() {
  const [isLogin, setLogin] = useState(false);
  const [input, setInputs] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  function handleClick() {
    setLogin(true);
  }
  function handleInputs() {
    setInputs(true);
  }
  function handleUsername(event) {
    setUsername(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }
  const userAuthentication = (e) => {
    e.preventDefault();
    fetch("https://twitterbackendd.herokuapp.com/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((response) => Cookies.set("token", response))
            
        } else {
          console.log("forbidden");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="login-page">
      <h1>
        Welcome to <span>Ginger</span>{" "}
        <HighlightIcon style={{ fontSize: "1.5em" }} />
      </h1>

      <h4 onClick={handleInputs}>Register</h4>
      <h4 onClick={handleClick}>Sign In</h4>
      {input && (
        <form className="form" method="post">
          <input
            onChange={handleUsername}
            name="username"
            type="text"
            placeholder="Username"
          />
          <input
            onChange={handlePassword}
            name="password"
            type="password"
            placeholder="Password"
          />
          {!isLogin && (
            <input
              name="password-confirmation"
              type="password"
              placeholder="Confirm Password"
            />
          )}
          <button onSubmit={userAuthentication} type="submit">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
      )}
    </div>
  );
}

export default LoginPage;
