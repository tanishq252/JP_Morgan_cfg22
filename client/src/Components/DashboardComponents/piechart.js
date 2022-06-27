
import React, { PureComponent, useState, useEffect} from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import axios from "axios"

const data01 = [
    {
      "name": "Net Revenue",
      "value": 2400
    },
    {
        "name": "Loss",
        "value": 400
      },

  ];

const data02 = [
    {
      "name": "Net Revenue",
      "value": 2400
    },    
    {
        "name": "Loss",
        "value": 400
      },

  ];
      

const Piechart = () => {

  const [dt, setarea] = useState([])
  
  useEffect(() => {
    const getPost = async() =>{
      const config ={
          headers:{
              "Content-Type":"application/json",
              Authorization:`Bearer ${JSON.parse(localStorage.getItem("userInfo"))?.token}`
          }
        }
        const posts = await axios.get(`http://localhost:4000/api/piChart`,config)
        setarea(posts.data)
        console.log(dt);
    }
    getPost()
  }, [])

  return (
    <>
<PieChart width={300} height={250}>
  <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>
</>
  )
}

export default Piechart