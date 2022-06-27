import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../../Context/ContextProvider';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const {user, setUser} = useContext(Context);
  const navigate=  useNavigate();
  const logout = async(e)=>{
    e.preventDefault();
    localStorage.removeItem("userInfo");
    setUser(null); 
    navigate("/") 
}
  return (
    <>
        <nav>
                <div style={{color: "white", fontSize: "20px"}} height="50px">
                  Agrinet
                </div>
                <div class="nav-links">
                    <ul>
                        
                        <Link  className="link" to="/">HOME</Link>
                        <Link className="link" to="/about">ABOUT</Link>
                        <Link className="link" to="/dashboard">DASHBOARD</Link>
                    <button className='btn2' onClick={logout}>LOGOUT</button>

                        {/* <Link className="link" to="/">CONTACT US</b><k> */}
                    </ul>
                </div>
            </nav>
    </>
  );
}
export default Navbar

