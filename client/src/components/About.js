import React from 'react'
import aboutpic from '../style/images/about.svg'

const About = () => {
  return (
    <>
      <div className='container emp-profile'>
        <form method="">
          <div className='row'>
            <div className='col-md-4'>
              <div className='profile-img'>
                <img src={aboutpic} alt="about" />
              </div>
            </div>
            <div className='col-md-6'>
              <div className="profile-head">
                <h5>Adarsh kumar</h5>
                <h6>Web Developer</h6>
                <p className='"profile-rating mt-3 mb-5'>RANKINGS <span>1/10</span></p>
                <ul className="nav nav-tabs" role='tablist'>
                  <li className="nav-item">
                    <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role='tab'>About</a>
                  </li>
                </ul>
              </div>
              <div>
              </div>
            </div>
            <div className='col-md-2'>
              <input type='submit' className='profile-edit-btm' name="btnAddMore" value="Edit-Profile" />
            </div>
          </div>
          <div className='row'>
            <div className="col-md-4">
              <div className="profile-work">
                <p>Work Link</p>
                <a href='youtube.com' target='about'>YouTube</a><br />
                <a href='youtube.com' target='about'>Instagram</a><br />
                <a href='youtube.com' target='about'>Twitter</a><br />
                <a href='youtube.com' target='about'>Website</a><br />
                <a href='youtube.com' target='about'>Github</a><br />
              </div>
            </div>
            <div className='col-md-8 pl-5 about-info'>
              <div className='tab-content profile-tab' id='myTabContent'>
                <div className="tab-pane fade show active" role='tabpanel' aria-labelledby='profile-tab'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>User Id</label>
                    </div>
                    <div className='col-md-6'>
                      <p>78344823y8</p>
                    </div>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Adarsh kumar</p>
                    </div>
                    <div className='col-md-6'>
                      <label>Email</label>
                    </div>
                    <div className='col-md-6'>
                      <p>adarsh2350i@gmail.com</p>
                    </div>
                    <div className='col-md-6'>
                      <label>Phone</label>
                    </div>
                    <div className='col-md-6'>
                      <p>9835685948</p>
                    </div>
                    <div className='col-md-6'>
                      <label>Profession</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Web Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default About
