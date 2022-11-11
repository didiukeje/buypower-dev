import FaqItem from "./FaqItem";

const GoLive = () => {
    return (
        <>
          <section id="faq" className="faq">
            <div className="container" data-aos="fade-up">

              <div className="section-title">
                <h2>How To Go Live</h2>
                <h4>Follow these steps to go live</h4>
              </div>

              <div className="faq-list">
                <FaqItem number={1} title={"Review"} >Please review our technical documentation <a href="/">here</a>.</FaqItem>
                <FaqItem number={2} title={"Submit"} >
                  Once you are satisfied with the documentation, send an email to <span><a href="mailto:partnerships@buypower.ng">partnerships@buypower.ng </a></span> 
                  and include the following:
                </FaqItem>
                <FaqItem number={3} title={"Agreement"} >After receiving your email, our merchant agreement contract and Commercials will be shared with you for your review and execution.</FaqItem>
                <FaqItem number={4} title={"Integration"} >A Skype link will be created for you to join our Developer Community to ensure a smooth integration process. </FaqItem>
                <FaqItem number={5} title={"Go Live"} >Your Go Live account will be created once Sandbox integration is completed and you will have an onboarding session with our Partnership Team.</FaqItem>
              </div>

            </div>
          </section>
        </>
    )
}
export default GoLive;