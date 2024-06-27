import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faReddit,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../imgs/HELLSING.png";
import "./style.css";

class Whoami extends Component {
  render() {
    return (
      <>
        <div className="conatinner">
          <div className="logo-containner">
            <div class="img-containner">
              <img src={logo} alt="My Logo" />
            </div>
            <h2>
              Farah <strong>Abderrazzak</strong>
            </h2>
            <q>Full Stack Web Developer</q>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              minus itaque voluptas laboriosam eos quibusdam repellendus
              cupiditate quam. Quos rem libero, at odio quasi nemo dignissimos
              quo facere ullam sequi. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Atque tenetur provident, dolore modi numquam ab,
              vel obcaecati nam repellendus dolor exercitationem debitis
              mollitia expedita repellat voluptates qui explicabo saepe? Hic
              dolorum cum est animi, quidem vero excepturi! Vitae iste ipsa,
              assumenda exercitationem rem nulla ad, explicabo quis ut quisquam
              assumenda exercitationem rem nulla ad, explicabo quis ut quisquam
              assumenda exercitationem rem nulla ad, explicabo quis ut quisquam
              assumenda exercitationem rem nulla ad, explicabo quis ut quisquam
              qui!
            </p>
            <ul className="social-containner">
              {/* <li> */}
              {/*   <a href=""> */}
              {/*     <FontAwesomeIcon icon={faEnvelope} /> */}
              {/*   </a> */}
              {/* </li> */}
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faReddit} />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
            </ul>
            <ul className="links-container">
              <li>
                <a href="https://github.com/u-shen/whoami/blob/main/whoami.pdf">
                  Review My CV
                </a>
              </li>
              <li>
                <a href="https://wa.me/0619770716">ASK ME ANYTHING</a>
              </li>
              <li>
                <a href="https://ko-fi.com/ushen_farah">BUY ME A COFFEE</a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default Whoami;
