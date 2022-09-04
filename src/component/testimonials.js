import React from "react";
import '../stylesheets/testimonials.css';

function Testimonial (props) {
    return (
            <div className="main-card">
            <div className="miniature">
                <img className="profile-pic"
                    src={require(`../images/image-${props.name}.jpg`)}
                    alt={props.name}/> 
                <div className="profile">  
                    <div className="graduate-name">{props.compName}</div>
                    <p>Verified Graduate</p>
                </div> 
            </div>
            <div className="opinion strong">{props.opinion}
            </div>
            <p className="testimonial">{props.testimony}
            </p>
            </div>
      );
}
export default Testimonial;