import gitlogo from "../images/job-searching.png";
import "../css/twitter.css";
import { GithubLoginButton,FacebookLoginButton,TwitterLoginButton,LinkedInLoginButton } from "react-social-login-buttons";
import React, { useState } from "react";
const axios = require("axios").default;


function Twitter(props) {
  const [city, setCity] = useState("");

  const getAllApartment = async () => {
    const response = await axios.get("http://localhost:4000/");
    setCity(response.status);
    console.log(response.data);
  };
  return (
    <div className="login">
      <div class="card" style={{ width: "25rem" }}>
      <img src={gitlogo} alt=""></img>
        <div class="card-body">
          <h5 class="card-title">Get a Job </h5>
          <GithubLoginButton onClick={() => alert("Hello")} />
          <TwitterLoginButton onClick={() => alert("Hello")} />
          <LinkedInLoginButton onClick={() => alert("Hello")} />
          <FacebookLoginButton onClick={() => alert("Hello")} />

        </div>
      </div>
    </div>
  );
}

export default Twitter;
