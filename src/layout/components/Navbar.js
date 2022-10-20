const Navbar = () => {
    return (
        <>
          <header id="header" className="fixed-top">
          <div className="container">

            <h1 className="logo"><a href="index.html">
              <img alt="" src={require("../assets/img/buypower-logo.png")} /></a>
            </h1>

            <nav id="navbar" className="navbar">
              <ul>
                <li className="nav-item"><a className="nav-link" href="/team">FAQs</a></li>
                <li className="nav-item"><a className="nav-link" href="/contact">Contact us</a></li>
                <li className="nav-item"><a className="nav-link btn-get-started scrollto" href="/about">Get Started</a></li>
              </ul>
            </nav>
          

          </div>
        </header>
        </>
    )
}
export default Navbar;