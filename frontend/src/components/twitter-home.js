import "../css/twitter.css";
import avatar from "../images/my.jpg";
import React, { useState } from "react";
const axios = require("axios").default;

function TwitterHome(props) {

  const [username,setUserName] = useState("Rashmika Gamage");
    function tweet(){
        
    }
  return (
    <div className="">
      <div class="container avatar-cont">
        <div class="row">
          <div class="col-sm-3">
          <img src={avatar} alt="Avatar" class="avatar"></img> 
          </div>
          <div class="col-sm mt-3">
          Hello! {username}
          </div>
        </div>
      </div>
     
      <h4 class="tweetHeader">Share your thoughts!!</h4>
         <textarea class="form-control text" id="exampleFormControlTextarea1" rows="3"></textarea>
        <button type="button" class="btn btn-info twt-button" onClick={() => tweet()} >Tweet</button>
    </div> 
  );
}

export default TwitterHome;
