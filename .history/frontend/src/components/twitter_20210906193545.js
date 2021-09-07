import { FacebookLoginButton } from "react-social-login-buttons";
import React, {useState} from "react";
const axios = require("axios").default;



 
function Twitter(props) {
    const [city, setCity] = useState("");

    const getAllApartment = async () => {
        const response = await axios.get(
            'http://localhost:4000/');
            setCity(response.status)
        console.log(response.data);
    }
    return (<div>
        <FacebookLoginButton onClick={() => alert("Hello")} />
    </div>)
  }


export default Twitter