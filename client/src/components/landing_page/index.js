import React from "react";
import "./style.css";
import rocket from "../../assets/rocket.png";
import 'bootstrap/dist/css/bootstrap.min.css';

export default  function LandingPpage(){
    return(
       <div className="landing-page row" style={{marginRight:0}}>
           <div className="column_our col-md-6" style={{padding:40}}>
               <div style={{display:"inline-flex",float:"left"}}>
                    <h1 className="font_style_1">START</h1>
                    <h1 className="font_style_1" style={{color:"#13EEAC"}}>UP</h1>
               </div>
                
                <h1 className="font_style_1">FAIR</h1>
                <p className="font_style_2">IT'S NOT ABOUT THE IDEAS.</p>
                <p className="font_style_2">IT'S ABOUT MAKING IDEAS HAPPEN.</p>
           </div>
           <div className="column_our col-md-6">
                <img alt="rocket" src={rocket} className="rocket-image"></img>
           </div>
       </div>
    )
}