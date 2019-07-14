import React from 'react'
import {Button} from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';

import AddressCard from './AddressCard'

class Footer extends React.Component{
	render(){
		return(
			<footer className="mt-5 pt-4">
				<div className="row bg-dark text-white mt-5 pt-3 mx-auto">
					<div className="col-sm-4 px-5 shadow">
						<CalmerEventCategories/>
					</div>

					<div className="col-sm-4 text-center">
						<AddressCard/>
						<p> &copy; Copyright Calmer-B 2019</p>
					</div>

					<div className="col-sm-4 px-5 shadow">
						<OrderService/>
					</div>
				</div>
			</footer>
		)
	}
}

class CalmerEventCategories extends React.Component{
	render(){
		return(
			<div className="mx-auto mt-3">
				<h3 className="text-center">Categories</h3>
				<ul className="two-columns  mt-3">
					<li>Award ceremony</li>
					<li>BabyShower</li>
					<li>Baptism</li>
					<li>Birthday</li>
					<li>Campaign</li>
					<li>Fund raiser</li>
					<li>Graduation</li>
					<li>Launch</li>
					<li>Seminar</li>
					<li>Wedding</li>
				</ul>
			</div>
		)
	}
}

class OrderService extends React.Component{
	render(){
		return(
			<div className="mx-auto mt-5 text-center">
				<Button
					variant="outline-light"
					className="btn-lg shadow"
					block>
						HIRE AN EVENT PLANNER
				</Button>
				
				<h4 className="mt-4">Follow us</h4>
				<div className="d-flex justify-content-sm-around mt-3">
					<ul>
						<li>
							<SocialIcon url="http://facebook.com"/>
						</li>
						<li>
							<SocialIcon url="http://twitter.com"/>
						</li>
						<li>
							<SocialIcon url="http://instagram.com"/>
						</li>
					</ul>
				</div>
			
			</div>
		)
	}
}

export default Footer