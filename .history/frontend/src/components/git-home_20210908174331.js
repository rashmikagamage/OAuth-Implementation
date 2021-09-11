import "../css/git.css";
import React, { useState } from "react";
const axios = require("axios").default;

function GitHome(props) {
  function getRepos() {}
  return (
    <div class="main">
      <form>
        <div class="form-group row mt-5">
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Example input"
          ></input>
          <input
            type="text"
            class="form-control mt-3"
            id="formGroupExampleInput"
            placeholder="Example input"
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
    </div>
  );
}

export default GitHome;
