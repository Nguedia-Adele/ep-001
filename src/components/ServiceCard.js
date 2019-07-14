import React from 'react'

import {Card, Button} from 'react-bootstrap';
import { IconContext } from "react-icons";
import { FaHeart, FaUndo } from 'react-icons/fa';
import ReactCardFlip from 'react-card-flip';

class ServiceCard extends React.Component{

	constructor() {
 		super();
 		this.state = {
 			isFlipped: false
 		};
 		this.handleClick = this.handleClick.bind(this);
 	}

 	handleClick(e) {
 		e.preventDefault();
 		this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
 	}

	render(){
		return(
			<div className="col-sm-4 my-3 ml-n1">
				<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
					<div key="front">
						<Card className="shadow-sm border rounded">
							<Card.Img src="http://placeimg.com/400/217/tech" variant="One service"/>
							
							<Card.Body className="mb-0 pb-0">
								<div className="row mt-n3">
									<div className="col-sm-4 text-muted">
										<ul className="ratings-list">
											<li>5.0</li>
										</ul>
										<p className="ml-n1 mt-n4"><small>100+ Reviews</small></p>
									</div>

									<div className="col-sm-8">
										<h6>Service name</h6>
										<h6 className="mt-n1">Category </h6>
									</div>
								</div>

								<div className="row mt-n2 ml-1">
									<p>
										Service details (excerpt) lorem ipsum  dolor sit amet
										<span className="text-info" onClick={this.handleClick}> more...</span>
									</p>
								</div>
							</Card.Body>

							<Card.Footer className="bg-white py-1">
								<ServiceCardFooter/>
							</Card.Footer>
						</Card>						
					</div>

					<div key="back">
						<Card className="shadow-sm border rounded bg-light">
							<Card.Body className="mb-n4 pb-n5">
								<div className="row my-n3">
									<div className="col-sm-3  text-right">
										<img src="http://placeimg.com/400/400/tech"
											alt="service name"
											className="img-circle img-xs mt-1"/>
									</div>
									<div className="col-sm-9">
										<h5>Service name</h5>
										<h6 className="mt-n2">Category </h6>
									</div>
								</div>
								
								<hr/>

								<p>
									Details Lorem ipsum dolor sit amet, ex pri sumo consectetuer.
									inciderint, et aperiam ornatus eleifend duo.
								</p>
								<ul className="golden-list">
									<li>Ceteros	deleniti</li>
									<li>Deserunt per id</li>
									<li>Vim no debitis</li>
									<li>Scripserit</li>
									<li>Et vix diceret</li>
								</ul>

								<p className="text-info mt-n2" onClick={this.handleClick}><small><FaUndo/> Back to front</small></p>
							</Card.Body>
							<Card.Footer className="py-1">
								<ServiceCardFooter/>
							</Card.Footer>
						</Card>
					</div>
				</ReactCardFlip>
			</div>
		)
	}
}

class ServiceCardFooter extends React.Component{
	render(){
		return(
			<div className="row">
				<div className="col-sm-2">
					<IconContext.Provider value={{ color: "grey", className: "global-class-name" }}>
						<div>
							<FaHeart/>									
						</div>
					</IconContext.Provider>
				</div>

				<div className="col-sm-10 text-right">
					<Button variant="outline-success" size="sm" href="/servicedetails">Order now</Button>
				</div>
			</div>
		)
	}
}
export default ServiceCard