import gitlogo from "../images/github-logo.png";
import "../css/twitter.css";
import { GithubLoginButton } from "react-social-login-buttons";
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
      <div class="card" style={{ width: "18rem" }}>
      <img src={gitlogo} alt=""></img>
        <div class="card-body">
          <h5 class="card-title">Manage GitHub at One Place</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <GithubLoginButton onClick={() => alert("Hello")} />
        </div>
      </div>
    </div>
  );
}

export default Twitter;
