import React, { Component } from "react";
import "./Home.css";
import { NavLink, Routes, Route } from "react-router-dom";
import jsonData from "./jsonBlogs/myBlogs.json";
import Blog from "./jsonBlogs/singleBlog/blog";

class Home extends Component {
  render() {
    const handleClick = (e) => {
      console.log(e.target);
    };
    return (
      <>
        <div className="container">
          {jsonData.blogs.map((blogs) => (
            <div className="blog-container">
              <NavLink to="/blog">
                <div className="blog" key={blogs.id}>
                  <div className="pix">
                    <img src={`./imgs/${blogs.img}`} alt="myIMG" />
                  </div>
                  <h3>{blogs.title}</h3>
                  <p>{blogs.desc}</p>
                  <small>{blogs.date}</small>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
        <Routes>
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </>
    );
  }
}
export default Home;
