import React from "react";
import "./homepage.css";
import Disco from "../layout/components/Disco.js"
import GoLive from "../layout/components/GoLive.js";
import Testimonials from "../layout/components/Testimonials.js";
import UseAPI from "../layout/components/UseAPI.js";
import Services from "../layout/components/Services.js";
import Support from "../layout/components/Support.js";
import Hero from "../layout/components/Hero.js";
import Footer from "../layout/components/Footer.js"
import Navbar from "../layout/components/Navbar.js"


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

