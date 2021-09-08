import "../css/twitter.css";
import React, { useState } from "react";
const axios = require("axios").default;

function TwitterHome(props) {

    function tweet(){
        
    }
  return (
    <div>
      <h4 class="tweetHeader">Share your thought</h4>
         <textarea class="form-control text" id="exampleFormControlTextarea1" rows="3"></textarea>
        <button type="btn " className="tweet-button"onClick={() => tweet()} >Get Repos</button>
    </div> 
  );
}

export default TwitterHome;
