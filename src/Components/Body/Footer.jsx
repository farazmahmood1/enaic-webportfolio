import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <footer className="section " id="footer">
        <div className="overlay footer-overlay" />
        {/*Content */}
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-4 col-sm-12">
              <div className="footer-widget">
                {/* Brand */}
                <a className="footer-brand text-white" style={{ textDecoration: 'none' }}>
                  Enaic Technologies
                </a>
                <p>
                  We are a team of skilled and passionate individuals who specialize in developing high-quality software solutions for businesses of all sizes. With years of experience in the industry, we have a deep understanding of the latest technologies and trends, and we meet needs of our clients.
                </p>
              </div>
            </div>
            <div className="col-lg-3 ml-lg-auto col-sm-12">
              <div className="footer-widget" >
                <h3>Account</h3>
                {/* Links */}
                <ul className="footer-links " >
                  <li >
                    <a href="#!">Terms and conditions</a>
                  </li>
                  <li>
                    <a href="#!">Privacy policy</a>
                  </li>
                  <li>
                    <a href="#!">Affiliate services</a>
                  </li>
                  <li>
                    <a href="#!">Help and support</a>
                  </li>
                  <li>
                    <a href="#!">Frequently Asked Question</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="footer-widget">
                <h3>About</h3>
                {/* Links */}
                <ul className="footer-links">
                  <li>
                    <a>About Us</a>
                  </li>
                  <li>
                    <a>Services</a>
                  </li>
                  <li>
                    <a>Pricing</a>
                  </li>
                  <li>
                    <a>Recent Projects</a>
                  </li>
                  <li>
                    <a>Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="footer-widget">
                <h3>Socials</h3>
                <ul className="list-unstyled footer-links">
                  <li>
                    <a>
                      <i className="fab fa-facebook-f" />
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fab fa-twitter" />
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fab fa-pinterest-p" />
                      Pinterest
                    </a>
                  </li>
                  <li>
                    <a href="https://enaic.netlify.app/" target={"_blank"}>
                      <i className="fab fa-linkedin" />
                      linkedin
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fab fa-youtube" />
                      YouTube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row  pt-5">
            <div className="col-lg-5 mx-auto">
              <div className="overflow-hidden text-center">
                <p className="footer-copy">
                  Copyright © Designed &amp; Developed by
                  <a
                    className="current-year"
                  >
                    &nbsp;Enaic Technologies
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a
        id="scroll-to-top"
        className="scroll-to-top js-scroll-trigger"
        style={{ textDecoration: 'none' }}
        onClick={scrollToTop}
      >
        <i className="fa fa-angle-up" />
      </a>
    </div>
  );
};

export default Footer;
