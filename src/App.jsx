import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router";

//component
import HomePage from "./HomePage";
import { WorkDetails } from "./WorkPage";

//css styles
import "animate.css/animate.min.css";
import "@styles/flexslider.css";
import "@styles/icomoon.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "@styles/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/style.css";


// wow
import "./js/wow.min.js";
// jQuery Easing
import "jquery.easing/jquery.easing.min.js";
// Waypoints
import "jquery-waypoints/waypoints.min.js";
// Counter up
import "jquery.counterup/jquery.counterup.min.js";
// Stellar Parallax
import "jquery.stellar/jquery.stellar.js";
// Easy PieChart
import "easy-pie-chart";
// Owl Carousel
import "owl.carousel/dist/owl.carousel.min.js";
// Moment timezone
import "./js/tempusdominus/js/moment-timezone.min.js";
// tempus dominus
import "./js/tempusdominus/js/tempusdominus-bootstrap-4.min.js";
// Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// Main Script
import "./js/script.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<WorkDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
