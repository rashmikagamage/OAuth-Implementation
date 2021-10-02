import React from 'react'
import './card.css';
//import DownloadLink from "react-download-link";
import { Link } from "react-router-dom";
import img from "../images/linkdelinjob3.png";

function Card({ title, email, description, imageUrl, link, pdfName }) {

    return (
        <div>
           
        <div className="card-container" style={{ marginLeft: 40, marginBottom: 40 }}>
            <div className="image-container">
                
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>

                <div className="card-content">
                    <div className="card-phnum">
                        <h6>Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that</h6>
                    </div>
                    <div className="card-content">
                        <div className="card-email">
                            <h8>hasithakeshsna9900@gmail.com</h8>
                        </div>

                        <div className="card-body">
                            <p>
                            <img src={imageUrl} alt="Avatar" class="avatard"></img>
                            </p>
                           

                        </div>
                        <div className ="crd-body">
                        <h8>hasithakeshsna9900@gmail.com</h8>
                        <h8>hasithakeshsna9900@gmail.com</h8>
                        <h8>hasithakeshsna9900@gmail.com</h8>
                        </div>


                    </div>

                    <button
            type="button"
            class="btn btn-info twt-button"
            
          >
            Check
          </button>



                </div>
            </div>
            &nbsp;&nbsp;
        </div>
        </div>
    )
}

export default Card;


