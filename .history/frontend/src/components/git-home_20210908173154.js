import "../css/twitter.css";
import React, { useState } from "react";
const axios = require("axios").default;

function GitHome(props) {
  function getRepos() {}
  return (
    <div>
      <form>
        <div class="form-group row">
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Example input"
          ></input>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Example input"
          ></input>
        </div>
        <div class = "row">
          <div class="col">
        <div class="form-check">
          <input
            class="form-check-input position-static"
            type="radio"
            name="blankRadio"
            id="blankRadio1"
            value="option1"
            aria-label="..."
          ></input>
        </div>
        </div>
        <div class = "col">
        <div class="form-check">
          <input
            class="form-check-input position-static"
            type="radio"
            name="blankRadio"
            id="blankRadio1"
            value="option1"
            aria-label="..."
          ></input>
        </div>
        </div>
        </div>
      </form>
    </div>
  );
}

export default GitHome;
