import React from "react";
import { useParams } from "react-router";
import blogImage1 from "./images/blog-1.jpg";
import blogImage2 from "./images/blog-2.jpg";

export const WorkPages = ({ id }) => {
  return (
    <div id="fh5co-blog" className="fh5co-bg-dark">
      <div className="container">
        <div className="row animate-box">
          <div className="col-md-11 col-md-offset-2 text-center fh5co-heading">
            <h2>Article Blog</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="fh5co-blog">
              <div
                className="blog-bg"
                style={{ backgroundImage: `url(${blogImage1})` }}
              ></div>
              <div className="blog-text">
                <div className="post-information">
                  <span className="posted_on">Nov. 15th 2023</span>
                  <span className="author">by John Doe</span>
                </div>
                <h3>Blog Post {id}</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque at quam id libero suscipit. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Quisque at quam id libero
                  suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Quisque at quam id libero suscipit. list folder
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque at quam id libero suscipit. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Quisque at quam id libero
                  suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Quisque at quam id libero suscipit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque at quam id libero suscipit. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Quisque at quam id libero
                  suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Quisque at quam id libero suscipit.
                </p>
                <ul className="stuff">
                  <li>
                    <i className="icon-heart2"></i>249
                  </li>
                  <li>
                    <i className="icon-eye2"></i>308
                  </li>
                  <li />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const WorkDetails = () => {
  const { id } = useParams();
  return <WorkPages id={id} />;
};
