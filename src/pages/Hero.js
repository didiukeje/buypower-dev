import GetStarted from "./GetStarted";
const Hero = () => {
    return (
        <>
          <section id="hero" className="d-flex">
          <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
            <div className="row justify-content-left">
              <div className="col-xl-6 col-lg-6 text-left" id="right-header-content">
                <p className="text-pre-title">Buypower For Developers</p>
                <h2 className="text-title">Create a smooth electricity payment experience with Buypower's API</h2>
                <GetStarted />
              </div>
              <div className="col-xl-3 col-lg-3 text-left" id="green-yellow">
                <img id="header-img0" alt="..." src={require("../layout/assets/img/header/green-frame.svg").default} />
                <img id="header-img1" alt="..." src={require("../layout/assets/img/header/yellow-frame.svg").default} />
              </div>
            </div>
            <div className="text-center">

            </div> 
          </div>
        </section>
        </>
    )
}
export default Hero;