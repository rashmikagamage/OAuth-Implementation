import "../css/twitter.css";
import avatar from "../images/my.jpg";
import React, { useState } from "react";
const axios = require("axios").default;

function TwitterHome(props) {

    function tweet(){
        
    }
  return (
    <div>
      <img src={avatar} alt="Avatar" class="avatar"></img> 
      <h4 class="tweetHeader">Share your thought</h4>
         <textarea class="form-control text" id="exampleFormControlTextarea1" rows="3"></textarea>
        <button type="button" class="btn btn-info twt-button" onClick={() => tweet()} >Tweet</button>
    </div> 
  );
}

export default TwitterHome;