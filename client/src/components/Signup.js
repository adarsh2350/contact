import React ,{useState} from 'react'
import signupimg from '../style/images/signup-image.jpg'
import { NavLink, useHistory} from 'react-router-dom'

const Signup = () => {
    const history = useHistory()
    const [user, setUser] = useState({
        name:"",email:"",phone:"",work:"",password:"",cpassword:""
    })

    let name,value
    const handleInputs = (e)=>{
        console.log(e)
        name = e.target.name
        value = e.target.value

        setUser({...user,[name]:value})
    }


    const PostData = async (e)=>{
        e.preventDefault()
        const [name,email,phone,work,password,cpassword] = user
        const res = await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,phone,work,password,cpassword
            })
        })
        const data = await res.json()
        if(res.status == 422 || !data){
            windows.alert("Invalid registrations")
            console.log("Invalid registrations")
        }
        else{
            windows.alert("registrations successfull")
            console.log("registrations successfull")
            history.push('/login')
        }
    }

    return (
      <>
          <section className="signup">
              <div className="container mt-5">
                  <div className="signup-content">
                      <div className="signup-form">
                          <h2 className="form-title">Sign up</h2>
                          <form method="POST" className="register-form" id="register-form">
                              <div className="form-group">
                                  <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                  <input type="text" name="name" id="name" placeholder="Your Name" autoComplete='off' value={user.name} onChange={handleInputs}/>
                              </div>
                              <div className="form-group">
                                  <label for="email"><i className="zmdi zmdi-email"></i></label>
                                  <input type="email" name="email" id="email" placeholder="Your Email" autoComplete='off' value={user.email} onChange={handleInputs}/>
                              </div>
                              <div className="form-group">
                                  <label for="phone"><i className="zmdi zmdi-phone-in-talk"></i></label>
                                  <input type="number" name="phone" id="phone" placeholder="Your Phone" autoComplete='off' value={user.phone} onChange={handleInputs}/>
                              </div>
                              <div className="form-group">
                                  <label for="work"><i className="zmdi zmdi-slideshow material-icons-name"></i></label>
                                  <input type="text" name="work" id="work" placeholder="Your Profession" autoComplete='off' value={user.work} onChange={handleInputs}/>
                              </div>
                              <div className="form-group">
                                  <label for="password"><i className="zmdi zmdi-lock"></i></label>
                                  <input type="password" name="password" id="password" placeholder="Your Password" autoComplete='off' value={user.password} onChange={handleInputs}/>
                              </div>
                              <div className="form-group">
                                  <label for="cpassword"><i className="zmdi zmdi-lock-outline"></i></label>
                                  <input type="password" name="cpassword" id="cpassword" placeholder="Confirm Your Password" autoComplete='off' value={user.cpassword} onChange={handleInputs}/>
                              </div>
                              <div className="form-group form-button">
                                  <input type="submit" name="signup" id="signup" className="form-submit" value="Register" onClick={PostData}/>
                              </div>
                          </form>
                      </div>
                      <div className="signup-image">
                          <figure><img src={signupimg} alt="sing up image" /></figure>
                          <NavLink to="/login" className="signup-image-link">I am already member</NavLink>
                      </div>
                  </div>
              </div>
          </section>
      </>
    )
}

export default Signup
