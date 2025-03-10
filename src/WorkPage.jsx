import React from "react";
import { useParams } from "react-router";

import blogImage1 from "./images/blog-1.jpg";
import blogImage2 from "./images/blog-2.jpg";
import jobData from "./jobData"; // Import job data

export const WorkPages = ({ id }) => {
  const job = jobData[id - 1];
  return (
    <div id="fh5co-work-details" className="fh5co-bg-dark">
      <div className="container">
        <div className="row animate-box">
          <div className="col-md-11 col-md-offset-2 text-center fh5co-heading">
            <h2>Work Details</h2>
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
                <h3>{job.title}</h3>
                <p>
                  <strong>Status:</strong> {job.status}
                </p>
                <p>
                  <strong>Date:</strong> {job.date}
                </p>
                <p>{job.description1}</p>
                {job.images.map((image, index) => (
                  <a
                    key={index}
                    href={image}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      width: "50%",
                      float: "inline-end"
                    }}
                  >
                    <img
                      className="blog-bg"
                      style={{
                        backgroundImage: `url(${image})`
                      }}
                    ></img>
                  </a>
                ))}
                <div className="container mt-5">
                  <h4 className="text-left mb-4">{job?.description2?.title}</h4>
                  {job?.description2?.responsibilities.map((item, index) => (
                    <div key={index} className="mb-4">
                      <h5 className="h4 mb-2">{item.heading}</h5>
                      <ul className="list-group list-group-flush">
                        {item.details.map((detail, i) => (
                          <li key={i} className="list-group-item">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
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
