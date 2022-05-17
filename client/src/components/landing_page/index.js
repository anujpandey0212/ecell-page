import React from "react";
import "./style.css";
import rocket from "../../assets/rocket.png";

export default  function LandingPpage(){
    return(
       <div className="row landing_page">
           <div className="col-md-6">
                <h1>STARTUP</h1>
                <h1>FAIR</h1>
                <p>its not about ideas</p>
                <p>its about making ideas happen</p>
           </div>
           <div className>
                <img alt="rocket" src={rocket} height={100}></img>
           </div>
       </div>
    )
}