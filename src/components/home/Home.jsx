import React, { Component } from "react";
import "./Home.css";
import jsonData from "./jsonBlogs/myBlogs.json";

class Home extends Component {
  render() {
    return (
      <>
        <div className="blog-container">
          {jsonData.blogs.map((blogs) => (
            <div className="blog" key={blogs.id}>
              <div className="pix">
                <img src={`./imgs/${blogs.img}`} alt="myIMG" />
              </div>
              <h3>{blogs.title}</h3>
              <p>{blogs.desc}</p>
              <small>{blogs.date}</small>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default Home;
