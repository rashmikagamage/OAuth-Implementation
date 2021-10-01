import "../css/git.css";
import { Button, Modal } from "react-bootstrap";
import code from "../images/code.png";
import tick from "../images/tick.gif";
import React, { useState } from "react";
const Axios = require("axios").default;

function GitHome(props) {
  const createRepos = async () => {
    Axios({
      method: "POST",
      withCredentials: true,
      url: "http://localhost:4000/git/createrepos",
    }).then((res) => console.log(res));
    handleShow();
  };

 
  const [repoName, setRepoName] = useState("");
  const [desc, setDesc] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  function handleShow() {
    setShow(true);
  }

  return (
    <div class="main">
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header>
            <Modal.Title>Repository was created!! 😊</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modalimg mr-5">
              <strong>Now you can push an existing repository from the command line 🖋️</strong>
              <br/>
              <ul>
                <li>git remote add origin https://github.com/rashmikagamage/ssdtest.git </li>
                <li>git branch -M main</li>
                <li>git push -u origin main</li>
              </ul>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <img src={code} alt="Avatar" class="img"></img>
      <form>
        <div class="form-group row mt-5">
          <input
            type="text"
            class="form-control"
            value= {repoName}
            onChange={e => setRepoName(e.target.value)}
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
      <button
        type="button"
        class="btn btn-dark btn-sm btn-block mt-5"
        onClick={() => createRepos()}
      >
        Create Repository
      </button>
    </div>
  );
}

export default GitHome;
