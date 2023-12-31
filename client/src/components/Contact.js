import React from 'react'
import contactimg from '../style/images/undraw-contact.svg'

const Contact = () => {
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <h3 className="heading mb-4">Let's talk about everything!</h3>
                  <p><img src={contactimg} alt="Image" className="img-fluid" /></p>
                </div>
                <div className="col-md-6">
                  <form className="mb-5" method="post" id="contactForm" name="contactForm">
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <input type="text" className="form-control" name="name" id="name" placeholder="Your name" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <input type="text" className="form-control" name="email" id="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <input type="number" className="form-control" name="subject" id="subject" placeholder="Your Phone" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <textarea className="form-control" name="message" id="message" cols="30" rows="7" placeholder="Write your message"></textarea>
                      </div>
                    </div>  
                    <div className="row">
                      <div className="col-12">
                        <input type="submit" value="Send Message" className="btn btn-primary rounded-0 py-2 px-4" />
                      <span className="submitting"></span>
                      </div>
                    </div>
                  </form>
                  <div id="form-message-warning mt-4"></div> 
                  <div id="form-message-success">
                    Your message was sent, thank you!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </>
  )
}

export default Contact
