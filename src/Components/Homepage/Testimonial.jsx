import React from 'react'
import { Link } from 'react-router-dom'
const Testimonial = () => {
    return (
        <div>
            <section className="section bg-grey" id="feature">
                <div className="container">
                    <div className="row justy-content-center">
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="text-center feature-block">
                                <div className="img-icon-block mb-4">
                                    <i className="ti-thumb-up" />
                                </div>
                                <h4 className="mb-2">The right advice</h4>
                                <p>Our team are experts in matching you with the right provider.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="text-center feature-block">
                                <div className="img-icon-block mb-4">
                                    <i className="ti-cup" />
                                </div>
                                <h4 className="mb-2">Recognised for excellence</h4>
                                <p>We've been awarded for our high rate of customer satisfaction.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="text-center feature-block">
                                <div className="img-icon-block mb-4">
                                    <i className="ti-wallet" />
                                </div>
                                <h4 className="mb-2">Compare the best</h4>
                                <p>We only compare market leaders with a reputation for service quality.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="text-center feature-block">
                                <div className="img-icon-block mb-4">
                                    <i className="ti-dashboard" />
                                </div>
                                <h4 className="mb-2">Premium Services</h4>
                                <p>We aim to exceed our client's expectations and help them achieve their business goals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div>
      <section className="" id="service" style={{ backgroundColor: "#F4F7FC" }}>
        <div className="container">
          <div className="row ">
            <div className="col-lg-4">
              <div className="service-img">
                <img src="images/blog-lg.jpg" alt className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 pl-4">
              <div className="service-content">
                <div className="line w-50" />
                <h1>Get a better deal and start saving money today</h1>
                <p>
                  We compare hundreds of leading products and plans across many
                  categories to bring you the best value for money.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 service-wrap">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8 offset-lg-4">
              <div
                className="carousel slide "
                id="service-carousel"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="service-block media">
                            <div className="service-icon">
                              <i className="ti-desktop" />
                            </div>
                            <div className="service-inner-content media-body">
                              <h4>Web Development</h4>
                              <p>
                                Build the product you need on time with an
                                experienced team
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="service-block media">
                            <div className="service-icon">
                              <i className="ti-mobile" />
                            </div>
                            <div className="service-inner-content media-body">
                              <h4>App Development</h4>
                              <p>
                                Built your very own applications with robust
                                backends
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="service-block media">
                            <div className="service-icon">
                              <i className="ti-layers-alt" />
                            </div>
                            <div className="service-inner-content media-body">
                              <h4>Graphic Design</h4>
                              <p>
                                We offer a wide range of graphic design services
                                to help create stunning visual content.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="service-block media">
                            <div className="service-icon">
                              <i className="ti-announcement" />
                            </div>
                            <div className="service-inner-content media-body">
                              <h4>Digital Marketing</h4>
                              <p>
                                Promotion of brands to connect with potential
                                customers using the internet
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" style={{ marginTop: "-30px" }}>
                <div className="col-lg-12">
                  <p className="pl-3">
                    Want to know more about this?{" "}
                    <Link
                      to="ContactUs"
                      state={{
                        subject: "Premium",
                        message:
                          "Describe the requirements required for your project ...",
                      }}
                    >
                      Contact us
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
        </div>
    )
}

export default Testimonial