import GetStarted from "./GetStarted";

const UseAPI = () => {
    return (
        <>
          <section id="cta" className="cta  section-bg">
            <div className="container" data-aos="zoom-in">
              <div className="row justify-content-center">
                <div className="card">
                  <div className="card-body text-left row">
                    <div className="col-md-8">
                      <div className="card-title">
                        Get Started now with BuyPower's API
                      </div>
                      <div className="card-text">
                        You'll find everything you need to
                        integrate our API with your business.
                      </div>
                    </div>
                    <GetStarted />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    )
}
export default UseAPI;