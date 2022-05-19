import React from "react";
import "./style.css";
import rocket from "../../assets/rocket.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import vision from "../../assets/vision.png";
import strategy from "../../assets/strategy.png";
import marketing from "../../assets/marketing.png";
import ideas from "../../assets/ideas.png";

export default  function LandingPpage(){
    return(
       <div className="landing-page row" style={{marginRight:0}}>
           <div className="column_our col-md-6" style={{padding:40}}>
               <div style={{display:"inline-flex",float:"left"}} className="startup">
                    <h1 className="font_style_1">START</h1>
                    <h1 className="font_style_1" style={{color:"#13EEAC"}}>UP</h1>
               </div>
                
                <h1 className="font_style_1">FAIR</h1>
                <p className="font_style_2 ideas_first_line">IT'S NOT ABOUT THE IDEAS.</p>
                <p className="font_style_2">IT'S ABOUT MAKING IDEAS HAPPEN.</p>
               <button id="start_button" type="button" class="btn btn-primary">Primary</button>
           </div>
           <div className="column_our col-md-6">
                <img alt="vision" src={vision} className="four-images"></img>
                <img alt="vision" src={strategy}  className="four-images"></img>
                <img alt="rocket" src={rocket} className="rocket-image"></img>
                <img alt="vision" src={marketing}  className="four-images"></img>
                <img alt="vision" src={ideas}  className="four-images"></img>
           </div>
       </div>
    )
}