import React from "react";
//import './card.css'
import { Link } from "react-router-dom";
import img from "../images/linkdelinjob3.png";

function Box({ title, email, description, imageUrl, link, pdfName, data , index}) {
  return (
    <div>
      <div class="card" style={{boxShadow: "0 8px 15px 0 rgba(0, 0, 0, 0.3)", padding: "1%"}}>
        <div class="container">
          <div class="row">
            <div class="col-4"><img src={imageUrl} alt="Avatar" class="avatard" style={{width:"200px"}}  ></img></div>
            <div class="col-8">
                <div class="row">
            <div class="col-12"><h3>{title}</h3></div>
            <div class="col-12"> <h6>Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that</h6></div>
            <div class="col-12"> <h8>hasithakeshsna9900@gmail.com</h8></div>
            <div class="col-12"> <h8>hasithakeshsna9900@gmail.com</h8></div>
            <br></br> <br></br>
            <div class="col-12"> <button type="button" onClick={()=>data(index)} class="btn btn-primary  btn-sm">Check</button></div>
            <br></br> <br></br>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
