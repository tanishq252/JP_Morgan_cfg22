import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"

function Register() {

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [email, setEmail] = useState("")
  const navigate = useNavigate();

  const login = (e) =>{
    e.preventDefault();
    navigate("/")
  }

  const register = async(e) =>{
    e.preventDefault();
    try {
        const res= await axios.post('http://localhost:4000/api/auth/register',{
          username:username,
          email:email,
          password:password,
        });

      setUsername("");
      setPassword("");
      setEmail("");

      console.log("register");
      console.log(res);
      navigate("/login")

    
      //toast---------
    } catch (error) {
      console.log(error.message);
            //toast---------
    }

   
}


  return (
    <div className="container">
    <div className="forms-container">
      <div className="signin-signup">
        <form action="#" className="sign-in-form" onSubmit={register}>
          <h2 className="title">Register</h2>
          <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)}  />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}  />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}  />
            </div>
          <input type="submit" value="Register" className="btn solid" />
          <p className="social-text">Visit our social platforms</p>
          <div className="social-media">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </form>
      </div>
    </div>
    <div className="panels-container">
      <div className="panel left-panel">
        <div className="content">
          <h3>New here ?</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            ex ratione. Aliquid!
          </p>
          <button className="btn transparent" id="sign-up-btn" onClick={login}>
            Register
          </button>
        </div>
        <img src="imags/register.png" className="image" alt="" />
      </div>
    </div>
  </div>
  )
}

export default Register