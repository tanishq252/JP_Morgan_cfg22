
import React, {useState, useEffect} from 'react'
import {RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts'
import axios from "axios"

const Radarchart = () => {

  const [dt, setarea] = useState([])
  
  
  useEffect(() => {
    const getPost = async() =>{
      const config ={
          headers:{
              "Content-Type":"application/json",
              Authorization:`Bearer ${JSON.parse(localStorage.getItem("userInfo"))?.token}`
          }
        }
        const posts = await axios.get(`http://localhost:4000/api/radarChart`,config)
        setarea(posts.data)
    }
    getPost()
  }, [])

  return (
    <RadarChart outerRadius={100} width={350} height={250} data={dt}>
    <PolarGrid />
    <PolarAngleAxis dataKey="subject" />
    <PolarRadiusAxis angle={30} domain={[0, 150]} />
    <br></br>

    <Radar name="Soil Condition" dataKey="soil_condition" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    <div></div>
    <Radar name="Weather Condition" dataKey="weather_condition" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
    <Legend />

  </RadarChart>
  )
}

export default Radarchart