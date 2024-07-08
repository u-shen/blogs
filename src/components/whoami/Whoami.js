import React, { Component } from "react";
import myImg from "./MY.jpg";
import "./style.css";

class Whoami extends Component {
  handleClick() {
    let card = document.querySelector(".card");
    let cardtoggle = document.querySelector(".toggle");
    cardtoggle.onclick = function () {
      card.classList.toggle("active");
    };
  }
  render() {
    return (
      <>
        <div class="card-container">
          <div class="card">
            <div class="contentBox">
              <div class="content">
                <h2>
                  Farah Abderrazzak <br /> <span>Front-End Developer</span>{" "}
                </h2>
                <div class="imgBox">
                  <img src={myImg} alt="" srcset="" />
                </div>
                <button onClick={this.handleClick}>
                  <a href="https://github.com/u-shen/whoami/blob/main/Resume.pdf">
                    MY RESUME
                  </a>
                </button>
              </div>
            </div>
            <div class="toggle" onClick={this.handleClick}>
              <span></span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Whoami;
