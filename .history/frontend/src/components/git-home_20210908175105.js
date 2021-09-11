import "../css/git.css";
import code from "../images/code.png";
import React, { useState } from "react";
const axios = require("axios").default;

function GitHome(props) {
  function getRepos() {}
  return (
    <div class="main card">
       <img src={code} alt="Avatar" class="img"></img>
      <form>
        <div class="form-group row mt-5">
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Repository Name"
          ></input>
          <input
            type="text"
            class="form-control mt-3"
            id="formGroupExampleInput"
            placeholder="Description"
          ></input>
        </div>
        <table>
          <tr>
            <td>
              <div class="form-check">
                <input
                  class="form-check-input position-static"
                  type="radio"
                  name="public"
                  id="true"
                  value="option1"
                  aria-label="..."
                ></input>
              </div>
            </td>
            <td>
              <label class="form-check-label ml-1 mr-3" for="exampleRadios2">
                Public
              </label>
            </td>
            <td>
              <div class="form-check">
                <input
                  class="form-check-input position-static"
                  type="radio"
                  name="private"
                  id="false"
                  value="false"
                  aria-label="..."
                ></input>
              </div>
            </td>
            <td>
              <label class="form-check-label ml-1 mr-3" for="exampleRadios2">
                Private
              </label>
            </td>
          </tr>
        </table>
      </form>
      <button type="button" class="btn btn-dark btn-sm btn-block mt-5">Create Repository</button>
    </div>
  );
}

export default GitHome;
