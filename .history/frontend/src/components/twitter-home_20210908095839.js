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
        <button type="button" className="tweet-button"onClick={() => tweet()} >Get Repos</button>
        <a class="twitter-share-button" href="https://twitter.com/intent/tweet" data-url="https://google.com" data-via="ryanboulware" data-text="stuff that needs tweeted">Tweet This</a>
    </div> 
  );
}

export default TwitterHome;
