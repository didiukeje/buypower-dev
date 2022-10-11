const Services = () => {
    return (
        <>
          <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">

              <div className="section-title mb-4">
                <h2>Why use BuyPower's API?</h2>
                <h4 className="px-2">We offer maximum value to our customers, wouldn't you want to join?</h4>
              </div>

              <div className="row pt-3 justify-content-between">
                <div className="card border-light why-card col-lg-4 col-md-4 d-flex align-items-stretch" data-aos="zoom-in"
                  data-aos-delay="100">
                  <div className="card-body">
                    <div className="card-icon bg-sec">
                      <img alt="..." src={require("../layout/assets/img/icons/chart.svg").default} />
                    </div>
                    <h5 className="card-title">
                      Highly Competitive Rates
                    </h5>
                    <p className="card-text">
                      We understand that you're building a business and looking to maximize your profits, we've got the best
                      rates you can get.
                    </p>
                  </div>
                </div>

                <div className="card border-light why-card col-lg-4 col-md-4 d-flex align-items-stretch" data-aos="zoom-in"
                  data-aos-delay="100">
                  <div className="card-body">
                    <div className="card-icon bg-sec">
                      <img width="17" alt="..." src={require("../layout/assets/img/icons/percent.svg").default} />
                    </div>
                    <h5 className="card-title">
                      98.5% Percent Uptime
                    </h5>
                    <p className="card-text">
                      We are up and running virtually all the time so that we're always available to provide our services to
                      customers whenever they need us.
                    </p>
                  </div>
                </div>

                <div className="card border-light why-card col-lg-4 col-md-4 d-flex align-items-stretch" data-aos="zoom-in"
                  data-aos-delay="100">
                  <div className="card-body">
                    <div className="card-icon bg-sec">
                      <img alt="..." src={require("../layout/assets/img/icons/file.svg").default} />
                    </div>
                    <h5 className="card-title">
                      Thorough Documentation
                    </h5>
                    <p className="card-text">
                      Our in-depth documentation is a delight. You'll find everything you need to integrate our API with your
                      business. Smooth sailing all the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    )
}
export default Services;