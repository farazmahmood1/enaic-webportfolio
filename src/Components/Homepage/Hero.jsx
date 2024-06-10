import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#000", paddingTop: "85px" }} />
      <section className="banner-area py-7">
        <div className="container">
          <div className="row  align-items-center">
            <div className="col-md-12 col-lg-7 text-lg-left">
              <div className="main-banner">
                {/* Heading */}
                <h1 className="display-4  mb-4 font-weight-normal">
                  <Typewriter
                    options={{
                      strings: [
                        "Welcome to Enaic Technologies",
                        "Welcome to Enaic Technologies",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
                {/* Subheading */}
                <p className="lead mb-4">
                  Transform your ideas to great products and services. We design
                  & build digital experiences that deliver results. As a
                  company, we are committed to providing our clients with the
                  most cost-effective, user-friendly, and creative technological
                  solutions possible.
                </p>
                {/* Button */}
                <p className="mb-0">
                  <a
                    href="#projects-wrap"
                    className="btn btn-primary btn-circled"
                  >
                    About us
                  </a>
                </p>
              </div>
            </div>

            <div className="col-lg-5 d-lg-block">
              <div className="banner-img-block">
                <img
                  src="images/banner-img-5.png"
                  alt="banner-img"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
