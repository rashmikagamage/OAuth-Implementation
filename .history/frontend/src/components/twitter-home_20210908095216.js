import "../css/twitter.css";
import React, { useState } from "react";
const axios = require("axios").default;

function TwitterHome(props) {

    function tweet(){
        
    }
  return (
    <div>
      <h2>Share your thought</h2>
         <textarea class="form-control text" id="exampleFormControlTextarea1" rows="3"></textarea>
        <button type="button" class="btn btn-primary"onClick={() => tweet()} >Get Repos</button>
    </div> 
  );
}

export default TwitterHome;
