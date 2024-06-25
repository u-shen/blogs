import React, { Component } from "react";
import "./about.css";
import img from "../imgs/LOGO.jpg";

class About extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="img">
            <img src={img} alt="my image" />
          </div>
          <div className="neofetch">
            <h1>Farah Abderrazzak</h1>
            <p>
              <strong>AKA:</strong> <span>Ushen</span>
            </p>
            <p>
              <strong>AGE:</strong> <span>23 years</span>
            </p>
            <p>
              <strong>LANG:</strong> <span>Arabic, English</span>
            </p>
            <p>
              <strong>OS:</strong> <span>Linux</span>
            </p>
          </div>
        </div>
      </>
    );
  }
}
export default About;
