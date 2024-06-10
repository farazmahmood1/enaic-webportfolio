import React from "react";

const Services = () => {
  return (
    <div>
      <section className="section" id="our-services">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 text-center">
              <div className="section-heading">
                <h2 className="section-title mb-2 text-white">Our Services</h2>
                <p className="mb-5 text-white">
                  Transform your ideas to great products and services. We
                  design & build digital experiences that deliver results.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-6 mb-30">
              <div className="web-service-block">
                <i className="ti-desktop" />
                <h3>Web Development</h3>
                <p>
                  Build the product you need on time with an experienced team
                  that uses a clear and effective design process. Role of a
                  website is regularly increasing in our routine life and
                  nothing is possible without the help of a website.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6 mb-30">
              <div className="web-service-block">
                <i className="ti-mobile" />
                <h3>App Development</h3>
                <p>
                  Enaic Technologies cover end-to-end development of mobile apps, from
                  business analysis and UI/UX design to mobile application
                  testing and deployment. Built your very own applications with
                  robust backends.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6 mb-30">
              <div className="web-service-block">
                <i className="ti-announcement" />
                <h3>Digital Marketing</h3>
                <p>
                  Enaic Technologies provides promotion of brands to connect with
                  potential customers using the internet and other forms of
                  digital communication including email, social media, web-based
                  advertising and marketing channel..
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6 ">
              <div className="web-service-block">
                <i className="ti-settings" />
                <h3>Web Application</h3>
                <p>
                Enaic Technologies offers wide-ranging web services. We integrate
                  advanced web technologies for seamless and interactive web
                  Applications. We carry more than just coding skills. Our
                  experience make us stand out from other web developmnent
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6 ">
              <div className="web-service-block">
                <i className="ti-layers-alt" />
                <h3>Graphic Design</h3>
                <p>
                  We offer a comprehensive range of graphic design services to
                  help businesses and individuals create stunning visual
                  content. Our skilled designers are equipped with the latest
                  tools and techniques to deliver high-quality designs..
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="web-service-block">
                <i className="ti-light-bulb" />
                <h3>2D / 3D Animation</h3>
                <p>
                  The possibilities for 3D animation are endless, We are
                  specialized in creating three-dimensional digital content that
                  simulates movement and depicts objects, characters, or scenes
                  in a visually compelling way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
