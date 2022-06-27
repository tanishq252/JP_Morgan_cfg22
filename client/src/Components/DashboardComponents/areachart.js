import React, { PureComponent, useEffect, useState } from 'react';
import { LineChart,Area,AreaChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from "axios"


const Areachart = () => {

  const [dt, setarea] = useState([])
  
  
  useEffect(() => {
    const getPost = async() =>{
      const config ={
          headers:{
              "Content-Type":"application/json",
              Authorization:`Bearer ${JSON.parse(localStorage.getItem("userInfo"))?.token}`
          }
        }
        const posts = await axios.get(`http://localhost:4000/api/areaChart`,config)
        setarea(posts.data)
    }
    getPost()
  }, [])

  return (
    <>
    <AreaChart width={730} height={250} data={dt}
    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
    <defs>
        <linearGradient id="colorSprinkler" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
        </linearGradient>
        <linearGradient id="colorDrip_Irrigation" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
        </linearGradient>
        <linearGradient id="colorManual" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#FF0036" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#FF0036" stopOpacity={0}/>
        </linearGradient>
    </defs>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Area type="monotone" dataKey="Drip_Irrigation" stroke="#8884d8" fillOpacity={1} fill="url(#colorDrip_Irrigation)" />
    <Area type="monotone" dataKey="Sprinkler" stroke="#82ca9d" fillOpacity={1} fill="url(#colorSprinkler)" />
    <Area type="monotone" dataKey="Manual" stroke="#FF0036" fillOpacity={1} fill="url(#colorManual)" />
    </AreaChart>
    <Legend/>
</>
  )
}

export default Areachart