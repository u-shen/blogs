import React, { Component } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Whoami from "./components/whoami/Whoami";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faYoutube,
  faTelegram,
  faReddit,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import logo from "./components/imgs/HELLSING.png";
import "./app.css";

class App extends Component {
  render() {
    return (
      <>
        <div className="navbar-container">
          <NavLink to="/">
            <div className="logo-container">
              <div className="imgs">
                <img className="logo" src={logo} alt="" />
              </div>
              <h1>ushen's blog</h1>
            </div>
          </NavLink>
          <nav className="navbar">
            <div className="social">
              <ul>
                <li>
                  <a href="https://github.com/u-shen">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UC2N6GtH0Wh3HwBcLRW4DQhQ">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/abderrazzak-farah-835aa130b/">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/abderrazzak-farah-835aa130b/">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/abderrazzak-farah-835aa130b/">
                    <FontAwesomeIcon icon={faTelegram} />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/abderrazzak-farah-835aa130b/">
                    <FontAwesomeIcon icon={faReddit} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="about-me">
              <ul>
                <li>
                  <a href="https://discord.gg/invite/NMGXuV7e?role=your_role&username=u.shen">
                    discord
                  </a>
                </li>
                <li>
                  <NavLink to="/whoami">whoami</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/whoami" element={<Whoami />} />
        </Routes>
      </>
    );
  }
}
export default App;
