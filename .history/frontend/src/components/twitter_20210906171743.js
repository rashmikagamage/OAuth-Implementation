import React from "react";

function getTwitter(){
    console.log("hello")
}
function Twitter(props) {
    return <div>
        
        
        <button type="button" onClick={()=>getTwitter()} class="btn btn-primary">Primary</button>

    </div>;
  }


export default Twitter