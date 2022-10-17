const Navbar = () => {
    return (
        <>
          <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center justify-content-between">

            <h1 className="logo"><a href="index.html">
              <img alt="" src={require("../assets/img/buypower-logo.png").default} /></a>
            </h1>

            <nav id="navbar" className="navbar navbar-expand-lg">
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
               <span className="navbar-toggler-icon"></span>
             </button>
             <div  className="collapse navbar-collapse" id="navmenu">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link scrollto" href="/team">FAQs</a></li>
                <li className="nav-item"><a className="nav-link scrollto pre-btn" href="/contact">Contact us</a></li>
                <li className="nav-item"><a className="nav-link btn-get-started scrollto" href="/about">Get Started</a></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
             </div>
            </nav>
          

          </div>
        </header>
        </>
    )
}
export default Navbar;