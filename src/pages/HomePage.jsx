//images
import bgImage from "./images/cover_bg_3.jpg";
import bgImage2 from "./images/carousel-bg-1.jpg";
import bandarImage from "./images/bandar-pelumas-logo.png";
import service1 from "./images/service-1.jpg";
import service2 from "./images/service-2.jpg";
import service3 from "./images/service-3.jpg";
import service4 from "./images/service-4.jpg";

import jobData from "./jobData";

import { Link } from "react-router";
import useHideLoader from "@hooks/useHideLoader";

const HomePage = () => {
  useHideLoader(); // hide loader on mount

  const serviceImages = [service1, service2, service3, service4];

  return (
    <>
      <div className="fh5co-loader"></div>

      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h2 className="m-0 text-primary">
            <img
              src={bandarImage}
              alt="Bandar Pelumas"
              width={150}
              height={100}
            />
            BPSA
          </h2>
        </Link>

        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="#fh5co-header" className="nav-item nav-link active">
              Home
            </a>
            <a href="#fh5co-about" className="nav-item nav-link">
              About
            </a>
            <a href="#fh5co-services" className="nav-item nav-link">
              Services
            </a>
            <a href="#fh5co-work" className="nav-item nav-link">
              Works
            </a>
          </div>

          <Link
            to="/quote"
            className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
          >
            Booking Service<i className="fa fa-arrow-right ms-3"></i>
          </Link>
        </div>
      </nav>
      {/* Navbar End */}

      <div id="page">
        <section
          id="fh5co-header"
          className="fh5co-cover js-fullheight"
          role="banner"
          data-stellar-background-ratio="0.5"
        >
          {/* Overlay agar konten tetap terlihat */}
          <div className="overlay"></div>

          {/* Carousel sebagai background header */}
          <div className="container-fluid p-0 mb-5">
            <div
              id="header-carousel"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="3000"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="w-100"
                    src={bgImage}
                    alt="Carousel Background 1"
                  />
                </div>

                <div className="carousel-item">
                  <img
                    className="w-100"
                    src={bgImage2}
                    alt="Carousel Background 2"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Konten utama header (diletakkan di atas carousel) */}
          <div className="header-main-content">
            <div className="container">
              <div className="row">
                <div className="col-md-11 col-md-offset-2 text-center">
                  <div className="display-t js-fullheight">
                    <div className="display-tc js-fullheight wow fadeIn">
                      <div
                        className="profile-thumb"
                        style={{ backgroundImage: `url(${bandarImage})` }}
                      ></div>
                      <h1 className="display-3">Bandar Pelumas</h1>
                      <h3>
                        <span>--Tagline Perusahaan--</span>
                      </h3>
                      <p></p>
                      <ul className="fh5co-social-icons">
                        <li>
                          <a
                            target="_blank"
                            href="https://www.instagram.com/official_bandarpelumas"
                          >
                            <i className="icon-instagram2" />
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.youtube.com/@bandar_pelumas"
                          >
                            <i className="icon-youtube2" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="fh5co-about" className="wow fadeIn" data-wow-delay="0.3s">
        <div className="container">
          <div className="row">
            <div className="col-md-11 col-md-offset-2 text-center fh5co-heading">
              <h2>Tentang Kami</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h2>Bandar Pelumas</h2>
              <p>
                A dedicated and detail-oriented professional with two years of
                experience in operational management and data entry at PT.
                Bandar Pelumas Sejahtera Abadi. Skilled in warehouse data input,
                sales and balance sheet analysis, and ensuring field operations
                adhere to company SOPs. Experienced in collaborating with
                finance and HR teams to monitor partners and employees, and
                adept at coordinating with senior management to enhance
                after-sales services. Successfully developed new service
                packages for workshop outlets and designed marketing content for
                Instagram, Facebook, and WhatsApp. Committed to continuous
                learning and applying innovative solutions in business
                operations.
              </p>
            </div>
            <div className="col-md-6">
              <h2>Format Header 2</h2>
              <p>
                A dedicated and detail-oriented professional with two years of
                experience in operational management and data entry at PT.
                Bandar Pelumas Sejahtera Abadi. Skilled in warehouse data input,
                sales and balance sheet analysis, and ensuring field operations
                adhere to company SOPs. Experienced in collaborating with
                finance and HR teams to monitor partners and employees, and
                adept at coordinating with senior management to enhance
                after-sales services. Successfully developed new service
                packages for workshop outlets and designed marketing content for
                Instagram, Facebook, and WhatsApp. Committed to continuous
                learning and applying innovative solutions in business
                operations.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <ul className="info">
                <li>
                  <span className="first-block">Full Name:</span>
                  <span className="second-block">Nama lengkap</span>
                </li>
                <li>
                  <span className="first-block">Phone:</span>
                  <span className="second-block">nomor telepon perusahaan</span>
                </li>
                <li>
                  <span className="first-block">Email:</span>
                  <span className="second-block">Email perusahaan</span>
                </li>
                <li>
                  <span className="first-block">Website:</span>
                  <span className="second-block">www.msultont.com</span>
                </li>
                <li>
                  <span className="first-block">Address:</span>
                  <span className="second-block">Tangerang, Indonesia</span>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="info">
                <li>
                  <span className="first-block">Full Name:</span>
                  <span className="second-block">Muhammad Sulton</span>
                </li>
                <li>
                  <span className="first-block">Phone:</span>
                  <span className="second-block">+6282299024212</span>
                </li>
                <li>
                  <span className="first-block">Email:</span>
                  <span className="second-block">msulton55@gmail.com</span>
                </li>
                <li>
                  <span className="first-block">Website:</span>
                  <span className="second-block">www.msultont.com</span>
                </li>
                <li>
                  <span className="first-block">Address:</span>
                  <span className="second-block">Tangerang, Indonesia</span>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="info">
                <li>
                  <span className="first-block">Full Name:</span>
                  <span className="second-block">Nama lengkap</span>
                </li>
                <li>
                  <span className="first-block">Phone:</span>
                  <span className="second-block">nomor telepon perusahaan</span>
                </li>
                <li>
                  <span className="first-block">Email:</span>
                  <span className="second-block">Email perusahaan</span>
                </li>
                <li>
                  <span className="first-block">Website:</span>
                  <span className="second-block">www.msultont.com</span>
                </li>
                <li>
                  <span className="first-block">Address:</span>
                  <span className="second-block">Tangerang, Indonesia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="fh5co-services" className="fh5co-bg-dark">
        <div className="container-xxl service py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="text-primary text-uppercase">
                // Our Services //
              </h6>
              <h1 className="mb-5">Explore Our Services</h1>
            </div>
            <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="col-lg-4">
                <div
                  className="nav w-100 nav-pills me-4"
                  id="service-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active"
                    data-bs-toggle="pill"
                    data-bs-target="#tab-pane-1"
                    type="button"
                    role="tab"
                  >
                    <i className="fa fa-car-side fa-2x me-3"></i>
                    <h4 className="m-0">Diagnostic Test</h4>
                  </button>
                  <button
                    className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                    data-bs-toggle="pill"
                    data-bs-target="#tab-pane-2"
                    type="button"
                    role="tab"
                  >
                    <i className="fa fa-car fa-2x me-3"></i>
                    <h4 className="m-0">Engine Servicing</h4>
                  </button>
                  <button
                    className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                    data-bs-toggle="pill"
                    data-bs-target="#tab-pane-3"
                    type="button"
                    role="tab"
                  >
                    <i className="fa fa-cog fa-2x me-3"></i>
                    <h4 className="m-0">Tires Replacement</h4>
                  </button>
                  <button
                    className="nav-link w-100 d-flex align-items-center text-start p-4 mb-0"
                    data-bs-toggle="pill"
                    data-bs-target="#tab-pane-4"
                    type="button"
                    role="tab"
                  >
                    <i className="fa fa-oil-can fa-2x me-3"></i>
                    <h4 className="m-0">Oil Changing</h4>
                  </button>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="tab-content w-100">
                  {serviceImages.map((imageSrc, index) => {
                    const id = index + 1;

                    return (
                      <div
                        key={id}
                        className={`tab-pane fade ${
                          id === 1 ? "show active" : ""
                        }`}
                        id={`tab-pane-${id}`}
                        role="tabpanel"
                      >
                        <div className="row g-4">
                          <div
                            className="col-md-6"
                            style={{ minHeight: "350px" }}
                          >
                            <div className="position-relative h-100">
                              <img
                                className="position-absolute img-fluid w-100 h-100"
                                src={imageSrc}
                                style={{ objectFit: "cover" }}
                                alt={`Service ${id}`}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <h3 className="mb-3">
                              15 Years Of Experience In Auto Servicing
                            </h3>
                            <p className="mb-4">
                              Tempor erat elitr rebum at clita. Diam dolor diam
                              ipsum sit. Aliqu diam amet diam et eos. Clita erat
                              ipsum et lorem et sit, sed stet lorem sit clita
                              duo justo magna dolore erat amet
                            </p>
                            <p>
                              <i className="fa fa-check text-success me-3"></i>
                              Quality Servicing
                            </p>
                            <p>
                              <i className="fa fa-check text-success me-3"></i>
                              Expert Workers
                            </p>
                            <p>
                              <i className="fa fa-check text-success me-3"></i>
                              Modern Equipment
                            </p>
                            <a
                              href="#"
                              className="btn btn-primary py-3 px-5 mt-3"
                            >
                              Read More{" "}
                              <i className="fa fa-arrow-right ms-3"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="fh5co-work">
        <div className="container">
          <div className="row wow fadeInUp">
            <div className="col-md-11 col-md-offset-2 text-center fh5co-heading">
              <h2>Cabang Kami</h2>
            </div>
          </div>
          <div className="row">
            {jobData.map((job, index) => {
              const slug = job.title.toLowerCase().replace(/\s/g, "-");
              return (
                <div
                  key={index}
                  className="col-md-3 text-center col-padding wow fadeInLeft"
                  data-wow-delay={`${0.1 + index * 0.2}s`}
                >
                  <Link
                    to={`/cabang/${slug}`}
                    state={{ id: index }}
                    className="work"
                    style={{ backgroundImage: `url(${job.images[0]})` }}
                  >
                    <div className="desc">
                      <h3>{job.title}</h3>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="fh5co-bg-dark wow fadeInUp" data-wow-delay="0.3s">
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-8 col-md-6">
                <h6 className="text-primary text-uppercase">
                  // Call To Action //
                </h6>
                <h1 className="mb-4">Have Any Pre Booking Question?</h1>
                <p className="mb-0">
                  Lorem diam ea sit dolor labore. Clita et dolor erat sed est
                  lorem sed et sit. Diam sed duo magna erat et stet clita ea
                  magna ea sed, sit labore magna lorem tempor justo rebum
                  dolores. Eos dolor sea erat amet et, lorem labore lorem at
                  dolores. Stet ea ut justo et, clita et et ipsum diam.
                </p>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="bg-primary d-flex flex-column justify-content-center text-center h-100 p-4">
                  <a
                    href="https://wa.me/+628111090770"
                    target="_blank"
                    className="btn btn-secondary py-3 px-5"
                    style={{ backgroundColor: "#CED3DC" }}
                  >
                    Contact Us <i className="fa fa-arrow-right ms-3"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gototop js-top">
          <a href="#" className="js-gotop">
            <i className="icon-arrow-up22"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default HomePage;
