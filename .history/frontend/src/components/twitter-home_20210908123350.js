import Picker from 'emoji-picker-react';
import "../css/twitter.css";
import avatar from "../images/my.jpg";
import React, { useState } from "react";
const axios = require("axios").default;

function TwitterHome(props) {

  //variables with react hooks
  const [username,setUserName] = useState("Rashmika Gamage");
  const [chosenEmoji, setChosenEmoji] = useState(null);

  //fucntion to select the emoji
  const onEmojiClick = (event, emojiObject) => {
    var targ = event.target || event.srcElement;
    document.getElementById("alltext").value += emojiObject.emoji;
    setChosenEmoji(emojiObject);
  };

  
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
         <textarea class="form-control text" id="alltext" rows="3"></textarea>
         <div> {chosenEmoji==null? "" : chosenEmoji.emoji }</div>
         <Picker onEmojiClick={onEmojiClick} />
        <button type="button" class="btn btn-info twt-button" onClick={() => tweet()} >Tweet</button>
    </div> 
  );
}

export default TwitterHome;
