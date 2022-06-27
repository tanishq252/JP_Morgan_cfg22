import React, { useContext, useState } from 'react'
import axios from "axios"
import { useNavigate} from "react-router-dom";
import "./Login.css"
import { Context } from '../../../Context/ContextProvider';

function Login() {

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();
  const {user,setUser} = useContext(Context);
  const login = async(e) =>{
    e.preventDefault();
   
    try {
    
        const {data} = await axios.post("http://localhost:4000/api/auth/login",{
        username:username,
        password:password
      })
      setUsername("");
      setPassword("");

      localStorage.setItem("userInfo",JSON.stringify(data));

      setUser(data)
      console.log("login");
      navigate("/")

    
      //toast---------
    } catch (error) {
      console.log(error);
            //toast---------
    }

   
}

  const register = (e) =>{
    e.preventDefault();
    navigate("/register")
  }

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form" onSubmit={login}>
            <h2 className="title">Login</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)}  />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" value={password}  onChange={e=>setPassword(e.target.value)}  />
            </div>
            <input type="submit" value="Login" className="btn solid"   />
            <p className="social-text">Visit our social platforms</p>
            <div className="social-media">
              <a href="" target="_blank" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" target="_blank" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" target="_blank"  className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" target="_blank"  className="social-icon">
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
            <button className="btn transparent" id="sign-up-btn" onClick={register}>
             Login
            </button>
          </div>
          <img src="imags/login.png" className="image" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login