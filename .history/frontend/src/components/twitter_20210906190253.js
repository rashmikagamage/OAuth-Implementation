import React from "react";
const axios = require("axios").default;


 const getAllApartment = async () => {
    const response = await axios.get(
        'https://reqres.in/api/users?page=2');
    console.log(response);
}
function Twitter(props) {
    return <div>
        
        
        <button type="button" onClick={()=>getAllApartment()} class="btn btn-primary">Primary</button>
        <hr>response.status</hr>

    </div>;
  }


export default Twitter