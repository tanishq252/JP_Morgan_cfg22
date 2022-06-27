// import React from 'react'
import React, { Component } from 'react';
import {Card,CardGroup, Container, Row, Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import "./dashboard.css"
import Piechart from '../DashboardComponents/piechart';
import Areachart from '../DashboardComponents/areachart';
import Funnelchart from '../DashboardComponents/funnel';
import Radialcurve from '../DashboardComponents/radialcurve';
import Radarchart from '../DashboardComponents/radarchart';
import Navbar from '../Navbar/Navbar';

const Dashboard = () => {
  return (
    <div className='container1'>
        <Navbar/>
        <div className='head'>
            <h1>
                Visual Analysis of the Crop
            </h1>

        </div>


        <Row style={{marginTop: "100px"}}>
            <Col>
            <Card style={{background:"#E6F9E1", width: '50rem', marginLeft: "100px", height: '25.2rem'}}>
                {/* <Card.Img variant="top" src=".\imags\login.png" /> */}
            <Card.Body>
                <Card.Title>Irrigation Analysis</Card.Title>
                <Card.Text>
                Increase in the quality of land after analysis on different modes of irriagation

                </Card.Text>
                    <Areachart></Areachart>
                </Card.Body>
                </Card>
            </Col>
            <Col>
            <Card style={{background:"#E6F9E1", width: '22rem' , marginLeft: "100px"}}>
                {/* <Card.Img variant="top" src=".\imags\login.png" /> */}
            <Card.Body>
                <Card.Title>Net Revenue and loss</Card.Title>
                    <Card.Text>
                    Track of Profit / Loss made on the desired crops after cultivating it on the best possible land considering the soil and weather conditions.
                    </Card.Text>
                    <Piechart></Piechart>
                </Card.Body>
                </Card>
            </Col>
            
        </Row>
        <Row>
        <Col>
            <Card style={{background:"#E6F9E1", width: '50rem', marginLeft: "100px", marginTop: "100px", height: "25rem"}}>
                {/* <Card.Img variant="top" src=".\imags\login.png" /> */}
            <Card.Body>
                <Card.Title>Cultivation Process</Card.Title>
                <Card.Text>
                    Process which displays the approximate number of days for completion of a particular process.
                </Card.Text>
                    <Funnelchart></Funnelchart>
                </Card.Body>
                </Card>
            </Col>
            <Col>
            <Card style={{background:"#E6F9E1", width: '22rem' , marginLeft: "100px", marginTop: "100px"}}>
                {/* <Card.Img variant="top" src=".\imags\login.png" /> */}
            <Card.Body>
                <Card.Title>Variation in Wages based on phases of cultivation</Card.Title>
                    <Card.Text>
                    Representation of Wages provided as per the phases of the agricultural practices.
                    </Card.Text>
                    <Radialcurve></Radialcurve>
                </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col>
            <Card style={{background:"#E6F9E1", width: '50rem' , marginLeft: "400px", marginBottom: "50px", marginTop: "100px"}}>
                {/* <Card.Img variant="top" src=".\imags\login.png" /> */}
            <Card.Body>
                <Row>
                    <Col>
                    <Card.Title style={{ marginTop: "50px"}}>Soil and Weather analysis</Card.Title>
                    <Card.Text>
                    Impact of soil and weather on various months, which helps us to indicate which month is the best for the cultivation.
                    </Card.Text>

                    </Col>

                    <Col>
                    <Radarchart></Radarchart>
                    </Col>
                </Row>
                    
                </Card.Body>
                </Card>
            </Col>
        </Row>



    </div>

  )
}

export default Dashboard