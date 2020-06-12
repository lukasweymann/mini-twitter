import React, { useState } from "react";
import "./LoginPage.css";
import HighlightIcon from '@material-ui/icons/Highlight';

function LoginPage() {
    const [isLogin, setLogin] = useState(false);
    const [input, setInputs] = useState(false);
  
    function handleClick(){
      setLogin(true);
    }
  function handleInputs(){
  setInputs(true);
  }
  
  return (
    <div className="login-page">
      <h1>Welcome to <span>Ginger</span> <HighlightIcon style={{fontSize: "1.5em"}}/></h1>


      <h4 onClick={handleInputs}>Register</h4><h4 onClick={handleClick}>Sign In</h4>
     {input && <form className="form">
     <input type="text" placeholder="Username" />
       <input type="password" placeholder="Password" />
        {!isLogin && (
          <input type="password" placeholder="Confirm Password" />
        )}
        <button type="submit">
          {isLogin ? "Login" : "Register"}
        </button>
      </form>}
    </div>
  );
}

export default LoginPage;
