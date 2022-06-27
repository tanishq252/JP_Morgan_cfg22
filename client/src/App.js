import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import {About} from "./Components/Pages/About/About";
import {Home} from "./Components/Pages/Home/Home";
import Dashboard from "./Components/Dashboard/dashboard";
import Piechart from "./Components/DashboardComponents/piechart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { useContext } from "react";
import { Context } from "./Context/ContextProvider";

function App() {
  const {user} = useContext(Context);
  return (
    <>
    <Router>
     <Routes> 
     <Route exact path="/" element={user?<Home/>:<Login/>} /> 
     <Route  path="/about" element={user?<About/>:<Login/>} /> 
     <Route  path="/login" element={<Login/>}/>
     <Route  path="/register" element={<Register/>}/> 
     <Route  path="/dashboard" element={user?<Dashboard/>:<Register/>}/> 
    </Routes>
   </Router>

   {/* <Navbar/> */}
  

    </>
  );
}

export default App;
