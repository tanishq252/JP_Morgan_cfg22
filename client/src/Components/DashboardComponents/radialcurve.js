import React, {useState, useEffect} from 'react'
import axios from "axios"
import {RadialBarChart, RadialBar, Tooltip, Legend} from 'recharts'


const Radialcurve = () => {

  const [dt, setarea] = useState([])
  
  
  useEffect(() => {
    const getPost = async() =>{
      const config ={
          headers:{
              "Content-Type":"application/json",
              Authorization:`Bearer ${JSON.parse(localStorage.getItem("userInfo"))?.token}`
          }
        }
        const posts = await axios.get(`http://localhost:4000/api/radarCurveChart`,config)
        setarea(posts.data)
    }
    getPost()
  }, [])

  return (
    <RadialBarChart 
    width={350} 
    height={250} 
    innerRadius="30%" 
    outerRadius="110%" 
    data={dt} 
    startAngle={180} 
    endAngle={0}
    >
      
      <RadialBar align="left" minAngle={15} label={{ fill: "fill", position: 'insideStart' }} background clockWise={true} dataKey="Wages" />
    <Legend/>

    <Tooltip />
    </RadialBarChart>
  )
}

export default Radialcurve