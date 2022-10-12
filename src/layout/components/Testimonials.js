const Testimonials = () => {
    return (
        <>
          <section id="testimonials" className="testimonials">
            <div className="container" data-aos="fade-up">

              <div className="section-title">
                <h2>Testimonials</h2>
                <h4>
                  Thousands of businesses trust BuyPower to help them make quick and effortless electricity payments and this
                  is what some of our customers have to say.
                </h4>
              </div>

              <div className="row text-center justify-content-center">
                <div id="carouselIndicators" className="carousel slide" data-ride="carousel" data-bs-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselIndicators" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                      <img alt="..." src={require("../assets/img/testimonials/testimonial1.svg").default} className="d-block w-100" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                      <img alt="..." src={require("../assets/img/testimonials/testimonial2.svg").default} className="d-block w-100" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                      <img alt="..." src={require("../assets/img/testimonials/testimonial3.svg").default} className="d-block w-100" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </>
    )
}
export default Testimonials;