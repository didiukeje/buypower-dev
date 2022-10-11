import React from "react";
import "./homepage.css";
import Disco from "./Disco.js"
import GoLive from "./GoLive.js";
import Testimonials from "./Testimonials.js";
import UseAPI from "./UseAPI.js";
import Services from "./Services.js";
import Support from "./Support.js";
import Hero from "./Hero.js";
import Footer from "../layout/components/Footer.js"
import Navbar from "./Navbar.js"


class Home extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <Hero />

        <main id="main">
          <Disco />
          <Services />
          <GoLive />
          <Support />
          <Testimonials />
          <UseAPI />
        </main>

        <Footer />
        
        {/* 
            <div id="preloader"></div>


            <!-- Vendor JS Files -->
            <script src={require("../layout/assets/vendor/glightbox/js/glightbox.min.js"></script>
            <script src={require("../layout/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
            <script src={require("../layout/assets/vendor/swiper/swiper-bundle.min.js"></script>

            <!-- Template Main JS File -->
            <script src={require("../layout/assets/js/main.js"></script> */}
      </div>
    )
  }
}

export default Home;

