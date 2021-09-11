import gitlogo from "../images/social.png";
import "../css/twitter.css";
import {
  GithubLoginButton,
  FacebookLoginButton,
  TwitterLoginButton,
  LinkedInLoginButton,
} from "react-social-login-buttons";
import React, { useState } from "react";
const Axios = require("axios");

function Login(props) {

  const gitHub = async () => {

    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/auth/github",
    }).then((res) => console.log(res));

  };


  return (
    <div className="login">
      <div class="card" style={{ width: "25rem" }}>
        <img src={gitlogo} class="login-img" alt=""></img>
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
