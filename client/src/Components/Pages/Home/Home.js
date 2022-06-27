import React from "react";
import logo from "./logo.png";
import "./home.css";
import Navbar from "../../Navbar/Navbar";

export const Home = () => {
	return (
		<>

			<section className='header'>
			<Navbar/>

				<div className='text-box'>
					<h1>FARMERS, WE HAVE YOUR BACK!</h1>
					<br />
					<button className=' button1'>
						<b>Read more</b>
					</button>
				</div>
			</section>
			<section className='footer'>
				<footer>
					<p>Copyrights to</p>
					<a href='www.agrinetgroup.com'>www.agrinetgroup.com</a>
				</footer>
			</section>
		</>
	);
};
