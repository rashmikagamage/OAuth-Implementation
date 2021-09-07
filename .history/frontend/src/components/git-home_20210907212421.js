import "../css/twitter.css";
import React, { useState } from "react";
const axios = require("axios").default;

function GitHome(props) {

    function getRepos(){
        
    }
  return (
    <div>
        <button type="button" class="btn btn-primary"onClick={() => getRepos()} >Get Repos</button>
    </div>
  );
}

export default GitHome;
