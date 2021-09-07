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
        <button type="button" onClick={()=>getAllApartment()} class="btn btn-primary">Primary</button>
    </div>)
  }


export default Twitter