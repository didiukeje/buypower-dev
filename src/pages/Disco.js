import React from "react";

const Disco = () => {
    return (
        <>
          <section id="about" className="about d-flex">
            <div className="container text-center" data-aos="fade-up">

              <div className="section-title text-center">
                <h2>Our Available Services</h2>
                <h4 className="">
                  BuyPower currently covers the following power distribution companies to help your customers pay for
                  electricity conveniently wherever they are.
                </h4>
              </div>

              <div className="row pt-2 text-center" id="disco">
                <div clsas="col-12 text-center">
                  <div className="row justify-content-center me-5 mt-5 mb-4" id="disco2">
                    <div className="col-sm-4" style={{textAlign: "right", marginRight: "60px"}}>
                      <img style={{height: "95px"}} alt="..." src={require("../layout/assets/img/partners/jed.svg").default} />
                    </div>

                    <div className="col-sm-3 mb-5">
                      <img alt="..." src={require("../layout/assets/img/partners/phed.svg").default} />
                    </div>

                    <div className="col-sm-4" style={{textAlign: "left", paddingLeft: "60px"}}>
                      <img style={{height: "95px"}} alt="..." src={require("../layout/assets/img/partners/ibedc.svg").default} />
                    </div>
                  </div>
                </div>

                <div clsas="col-12 text-center">
                  <div className="row justify-content-center mb-5" id="disco3">
                    <div className="col-sm-3">
                      <img alt="..." src={require("../layout/assets/img/partners/aedc.svg").default} />
                    </div>

                    <div className="col-sm-3">
                      <img style={{height: "95px"}} alt="..." src={require("../layout/assets/img/partners/iedc.svg").default} />
                    </div>

                    <div className="col-sm-3">
                      <img alt="..." src={require("../layout/assets/img/partners/ekedc.svg").default} />
                    </div>

                    <div className="col-sm-3">
                      <img alt="..." src={require("../layout/assets/img/partners/kedc.svg").default} />
                    </div>
                  </div>
                </div>

                <div className="col-12 text-center">
                  <div className="row justify-content-center mt-4 mb-5" id="disco4">
                    <div className="col-sm-3">
                      <img alt="..." src={require("../layout/assets/img/partners/eedc.svg").default} />
                    </div>

                    <div className="col-sm-3">
                      <img alt="..." src={require("../layout/assets/img/partners/kaedc.svg").default} />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </>
    )
}
export default Disco;