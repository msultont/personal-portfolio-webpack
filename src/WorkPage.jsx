import React from "react";
import { useLocation } from "react-router-dom";

import blogImage1 from "./images/bpsa-cipondoh.jpg";
import blogImage2 from "./images/portfolio-4.jpg";
import blogImage3 from "./images/portfolio-6.jpg";

import jobData from "./jobData"; // Import job data

import ScrollToTop from "./ScrollToTop";

export const WorkPages = ({ id }) => {
  const job = jobData[id];

  const posts = [
    {
      id: 1,
      image: blogImage1,
      date: "Mar. 15th 2016",
      title: "Photoshoot On The Street",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      likes: 249,
      views: 308
    },
    {
      id: 2,
      image: blogImage2,
      date: "Mar. 15th 2016",
      title: "Surfing at Philippines",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      likes: 249,
      views: 308
    },
    {
      id: 3,
      image: blogImage3,
      date: "Mar. 15th 2016",
      title: "Capture Living On Underwater",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      likes: 249,
      views: 308
    }
  ];
  return (
    <>
      <ScrollToTop />
      <div id="fh5co-work-details" className="fh5co-bg-dark">
        <div className="container">
          <div className="row wow fadeInUp">
            <div className="col-md-11 col-md-offset-2 text-center fh5co-heading">
              <h2>Cabang Kami</h2>
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
                    <strong>Alamat:</strong> {job.alamat}
                  </p>
                  <p>
                    <strong>Date:</strong> {job.date}
                  </p>
                  <p>{job.description1}</p>
                  <div className="row">
                    {job.images.map((image, index) => (
                      <div
                        key={index}
                        className="col-md-6 text-center col-padding wow fadeInLeft"
                        data-wow-delay={`${0.1 + index * 0.2}s`}
                      >
                        <a
                          href={image}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="blog-bg"
                            style={{
                              backgroundImage: `url(${image})`
                            }}
                          ></img>
                        </a>
                      </div>
                    ))}
                  </div>
                  <div className="container mt-5">
                    <h4 className="text-left mb-4">
                      {job?.description2?.title}
                    </h4>
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

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="d-flex py-5 px-4">
                <i className="fa fa-certificate fa-3x text-primary flex-shrink-0"></i>
                <div className="ps-4">
                  <h5 className="mb-3">Quality Servicing</h5>
                  <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                  <a className="text-secondary border-bottom" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="d-flex bg-light py-5 px-4">
                <i className="fa fa-users-cog fa-3x text-primary flex-shrink-0"></i>
                <div className="ps-4">
                  <h5 className="mb-3">Expert Workers</h5>
                  <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                  <a className="text-secondary border-bottom" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="d-flex py-5 px-4">
                <i className="fa fa-tools fa-3x text-primary flex-shrink-0"></i>
                <div className="ps-4">
                  <h5 className="mb-3">Modern Equipment</h5>
                  <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                  <a className="text-secondary border-bottom" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="fh5co-blog">
        <div className="container">
          <div className="row wow fadeInUp">
            <div className="col-md-8 offset-md-2 text-center fh5co-heading">
              <h2>Post on Medium</h2>
              <p>
                Dignissimos asperiores vitae velit veniam totam fuga molestias
                accusamus alias autem provident. Odit ab aliquam dolor eius.
              </p>
            </div>
          </div>
          <div className="row">
            {posts.map(post => (
              <div key={post.id} className="col-md-4">
                <div
                  className="fh5co-blog wow fadeInLeft"
                  data-wow-delay={`${0.1 + post.id * 0.2}s`}
                >
                  <a
                    href="#"
                    className="blog-bg"
                    style={{
                      backgroundImage: `url(${post.image})`
                    }}
                  ></a>
                  <div className="blog-text">
                    <span className="posted_on">{post.date}</span>
                    <h3>
                      <a href="#">{post.title}</a>
                    </h3>
                    <p>{post.description}</p>
                    <ul className="stuff">
                      <li>
                        <i className="icon-heart2"></i>
                        {post.likes}
                      </li>
                      <li>
                        <i className="icon-eye2"></i>
                        {post.views}
                      </li>
                      <li>
                        <a href="#">
                          Read More
                          <i className="icon-arrow-right22"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const WorkDetails = () => {
  const location = useLocation();
  const namaCabang = location.pathname.split("/")[2].replace(/-/g, " ");
  const data = jobData.find(data => data.title.toLowerCase() === namaCabang);
  const id = location.state?.id || data.id - 1;

  return <WorkPages id={id} />;
};
