import React from "react";

const Info = () => {
  return (
    <div>
      <section className="section mt-5" id="about-us">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h3 className="text-white">
                  <b>"Enaic Technologies"</b> is a dedicated resource of business
                  professionals, who have pooled their acknowledged experience &
                  expertise in business consulting & enterprise solutions, for
                  utmost satisfaction of our clients.
                </h3>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="lead text-white">
                More than ever before, consumers demand insight and choice as
                the rise of smartphone technology enables it.
                <br /> <br />{" "}
                <i className="fa-solid fa-chevron-right text-white" /> &nbsp;
                Our experience and industry leadership meets and exceeds our
                customers’ expectations, this allows our team to consistently
                deliver high-value benefits for our customers.
                <br />
                <i className="fa-solid fa-chevron-right text-white" />
                &nbsp; Innovative solutions permeate all we do as we go about
                applying technological advances to improve the lives of our
                customers.
                <br />
                <i className="fa-solid fa-chevron-right text-white" />{" "}
                &nbsp;We’ll work closely with you to evaluate your needs,
                identify the best solutions to meet those needs, and realize
                your full potential.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="section-bottom">
        <div className="container">
          <div className="row py-4">
            <div className="col-lg-7 col-md-12 col-sm-12 ">
              <div className="single-project">
                <img src="images/bg/banner_bg.jpg" alt className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 ">
              <div className="project-content-block">
                <h4>Do you know who we are?</h4>
                <h2>More than just service...</h2>
                <p>
                We are a team of skilled and passionate individuals who specialize in developing high-quality software solutions for businesses of all sizes. With years of experience in the industry, we have a deep understanding of the latest technologies and trends, and we meet needs of our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
