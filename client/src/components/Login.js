import React from 'react'
import loginimg from '../style/images/signin-image.jpg'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <section className="sign-in">
            <div className="container mt-5">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src={loginimg} alt="sing up image" /></figure>
                        <NavLink to="/signup" className="signup-image-link">Create an account</NavLink>
                    </div>
                    <div className="signin-form mt-5">
                        <h2 className="form-title">Log in</h2>
                        <form method="POST" className="register-form" id="login-form">
                        <div className="form-group">
                                <label for="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email" autoComplete='off'/>
                            </div>
                            <div className="form-group">
                                <label for="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="your_pass" id="your_pass" placeholder="Password" autoComplete='off'/>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>  
    </>
  )
}

export default Login