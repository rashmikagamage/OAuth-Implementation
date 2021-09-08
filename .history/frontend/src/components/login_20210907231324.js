import gitlogo from "../images/job-searching.png";
import "../css/twitter.css";
import {
  GithubLoginButton,
  FacebookLoginButton,
  TwitterLoginButton,
  LinkedInLoginButton,
} from "react-social-login-buttons";
import React, { useState } from "react";
const axios = require("axios");

function Login(props) {
  const gitHub = async () => {
    //const response = await axios.get("http://localhost:4000/auth/twitter");
    //console.log(response);
    fetch('http://localhost:4000')
        .then(response => console.log(response))
        ;
  
}

  return (
    <div className="login">
      <div class="card" style={{ width: "25rem" }}>
        <img src={gitlogo} alt=""></img>
        <div class="card-body">
          <div className="buttonSize">
            <GithubLoginButton onClick={() => gitHub()} />
            <TwitterLoginButton onClick={() => alert("Hello")} />
            <LinkedInLoginButton onClick={() => alert("Hello")} />
            <FacebookLoginButton onClick={() => alert("Hello")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
