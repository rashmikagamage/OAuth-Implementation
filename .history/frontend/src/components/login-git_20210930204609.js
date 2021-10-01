import logingit from "../images/gitlogin.png";
import {useHistory} from "react-router-dom";
import "../css/twitter.css";
import {
  GithubLoginButton,
  FacebookLoginButton,
  TwitterLoginButton,
  LinkedInLoginButton,
} from "react-social-login-buttons";
import React, { useState } from "react";
const Axios = require("axios");

function LoginGit(props) {

  let history = useHistory();

  const gitHub = async () => {

    const response = await Axios.get(
      'http://localhost:4000/auth/github',
     
  );
  history.push(response.request.responseURL)

  };


  return (
    <div className="login">
      <div class="card" style={{ width: "25rem" }}>
        <img src={logingit} class="login-img" alt=""></img>
        <div class="card-body">
          <div className="buttonSize">
            <GithubLoginButton onClick={() => gitHub()} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginGit;
