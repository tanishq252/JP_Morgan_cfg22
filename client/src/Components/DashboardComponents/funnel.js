import React, {useEffect, useState} from 'react'
import {Funnel, FunnelChart, Tooltip, LabelList, Legend} from 'recharts'
import axios from "axios"                        

const Funnels = () => {
  const [dt, setarea] = useState([])
  
  useEffect(() => {
    const getPost = async() =>{
      const config ={
          headers:{
              "Content-Type":"application/json",
              Authorization:`Bearer ${JSON.parse(localStorage.getItem("userInfo"))?.token}`
          }
        }
        const posts = await axios.get(`http://localhost:4000/api/funnelChart`,config)
        setarea(posts.data)
    }
    getPost()
  }, [])


  return (
    <>
          <FunnelChart width={730} height={250}>
    <Tooltip />
    <Funnel
      dataKey="value"
      data={dt}
      isAnimationActive
    >
      <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
    </Funnel>
  </FunnelChart>
  <Legend/>
    </>
  )
}

export default Funnels