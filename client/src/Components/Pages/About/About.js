import React from "react";
import "./about.css";
import one from "./1.jpg";
import Navbar from "../../Navbar/Navbar";

export const About = () => {
	return (
		<>
			<div className='about-section'>
				<Navbar/>
				<h1>About Us</h1>
				<p>
					Synergizing knowledge with due diligence to local conditions makes
					AgriNet Group a catalytic agent for progress
				</p>
			</div>

			<h2 style={{textAlign: "center"}}>Our Specialities</h2>
			<div className='row'>
				<div className='column'>
					<div className='card'>
						<img src={one} alt='Jane' style={{width: '100%'}} />
						<div className='cont'>
							<p>
								AgriNet has been established to bring about a holistic approach
								to agriculture management, wherein the “sowing of seeds to
								fruition of labour” can be pre-determined and executed with
								assured results
							</p>
						</div>
					</div>
				</div>
				<div className='column'>
					<div className='card'>
						<img
							src='https://www.iaea.org/sites/default/files/styles/original_image_size/public/cn-305-banner-1140x640.jpg?itok=mkXWvuMy'
							width='100%'
							height='50%'
						/>
						<br />
						<div className='cont'>
							<p>
								Our goal is to enrich agriculture, by enhancing biosphere with
								sustainable methodologies and profitable returns on investment
								for all stake holders, from the farmer to the consumer across
								the supply chain.
							</p>
						</div>
					</div>
				</div>

				<div className='column'>
					<div className='card'>
						<img
							src='https://indiaforensic.com/certifications/wp-content/uploads/2017/01/agriculture.jpg'
							alt='John'
							style={{width: '100%'}}
						/>
						<br />
						<br />
						<div className='cont'>
							<p>
								Our passion for the food industry and the consumer we serve
								empowers us to strive in producing the highest service we can
								consistently.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
