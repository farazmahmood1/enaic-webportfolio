import React from 'react'

const ContactUs = () => {
  return (
    <div>
        <section className="section" id="contact">
          <div className="container">
            <div className="row mb-4">
              <div className="col-md-8 col-lg-6">
                <h5>Leave a Message</h5>

                <h2 className="section-title mb-2 ">
                  Tell us about
                  <span className="font-weight-normal"> yourself</span>
                </h2>

                <p className="mb-5 ">
                  Whether you have questions or you would just like to say
                  hello, contact us.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-12">
                    <div
                      className="alert alert-success contact__msg"
                      style={{ display: "none" }}
                      role="alert"
                    >
                      Your message was sent successfully.
                    </div>
                  </div>
                </div>

                <form className="contact_form" action="mail.php">
                  <div className="row">
                    <div className="col-sm-6 mb-6">
                      <div className="form-group">
                        <label className="h6 small d-block text-uppercase">
                          Your name
                          <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <input
                            className="form-control"
                            name="name"
                            id="name"
                            required
                            placeholder="John Doe"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 mb-6">
                      <div className="form-group">
                        <label className="h6 small d-block text-uppercase">
                          Your email address
                          <span className="text-danger">*</span>
                        </label>
                        <div className="input-group ">
                          <input
                            className="form-control"
                            name="email"
                            id="email"
                            required
                            placeholder="john@gmail.com"
                            type="email"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="w-100" />

                    <div className="col-sm-6 mb-6">
                      <div className="form-group">
                        <label className="h6 small d-block text-uppercase">
                          Subject
                          <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <input
                            className="form-control"
                            name="subject"
                            id="subject"
                            required
                            placeholder="Web design"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 mb-6">
                      <div className="form-group">
                        <label className="h6 small d-block text-uppercase">
                          Your Phone Number
                          <span className="text-danger">*</span>
                        </label>
                        <div className="input-group ">
                          <input
                            className="form-control"
                            id="phone"
                            name="phone"
                            required
                            placeholder="1-800-643-4500"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 mb-6">
                      <div className="form-group">
                        <label className="h6 small d-block text-uppercase">
                          Business Plan
                          <span className="text-danger">*</span>
                        </label>
                        <div className="input-group ">
                          <input
                            defaultValue={''}
                            className="form-control"
                            id="phone"
                            name="phone"
                            placeholder="Premium Plan"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 mb-6">
                      <div className="form-group">
                        <label className="h6 small d-block text-uppercase">
                          Prototype
                          <span className="text-danger">*</span>
                        </label>
                        <div className="input-group ">
                          <input
                            className="form-control"
                            id="phone"
                            name="phone"
                            placeholder="Any Other "
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group mb-5">
                    <label className="h6 small d-block text-uppercase">
                      How can we help you?
                      <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <textarea
                        className="form-control"
                        rows={4}
                        name="message"
                        id="message"
                        required
                        placeholder="Hi there, I would like to ..."
                        defaultValue={''}
                      />
                    </div>
                  </div>

                  <div className>
                    <input
                      name="submit"
                      type="submit"
                      className="btn btn-primary btn-circled"
                      defaultValue="Send Message"
                    />
                    <p className="small pt-3">
                      We'll get back to you in 1-2 business days.
                    </p>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe
                      className="gmap_iframe"
                      width="100%"
                      frameBorder={0}
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}
                      src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Heaven Mall Zarrar Shaheed Road, Al-Faisal Town, Lahore Punjab Pakistan&t=&z=13&ie=UTF8&iwloc=B&output=embed"
                    />
                    <a href="https://www.gachacute.com/">Download</a>
                  </div>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default ContactUs