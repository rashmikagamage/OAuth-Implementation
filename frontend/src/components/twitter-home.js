import Picker from "emoji-picker-react";
import "../css/twitter.css";
import avatar from "../images/my.jpg";
import React, { useState } from "react";
const Axios = require("axios").default;

function TwitterHome(props) {
  //variables with react hooks
  const [username, setUserName] = useState("Rashmika Gamage");
  const [chosenEmoji, setChosenEmoji] = useState(null);

  //fucntion to select the emoji
  const onEmojiClick = (event, emojiObject) => {
    document.getElementById("textArea").value += emojiObject.emoji;
    setChosenEmoji(emojiObject);
  };

  //method for calling the tweet ap
  function tweet() {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "https://api.twitter.com/1.1/statuses/${token}",
      body:tweet
    }).then((res) => console.log(res));
  };
    
  

  return (
    <div className="container twitter-container ">
      <div class="row">
        <div class="col">
          <div class="container avatar-cont">
            <div class="row">
              <div class="col-sm-3">
                <img src={avatar} alt="Avatar" class="avatar"></img>
              </div>
              <div class="col-sm mt-3">Hello! {username}</div>
            </div>
          </div>
          <h4 class="tweetHeader">Share your thoughts!!</h4>
          <textarea class="form-control text" id="textArea" rows="3"></textarea>
          <button
            type="button"
            class="btn btn-info twt-button"
            onClick={() => tweet()}
          >
            Tweet
          </button>
        </div>
        <div class="col emoji-con">
        <Picker onEmojiClick={onEmojiClick} /> 
        </div>
      </div>
    </div>
  );
}

export default TwitterHome;
