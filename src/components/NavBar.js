import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import { Link } from "react-router-dom";

import SignupForm from './SignupForm'

import Logo from '../images/Logo.png'

class NavBar extends React.Component{
	constructor(props, context) {
    	super(props, context);

    	this.handleShow = this.handleShow.bind(this);
    	this.handleClose = this.handleClose.bind(this);

    	this.state = {
    		show: false,
    	};
	}

	handleClose() {
    	this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	render(){
		return(
			<div>
				<nav id="CalmerNavbar1" className="navbar navbar-expand-lg navbar-light fixed-top transparent">
				    <div className="d-flex flex-grow-1">
				        <span className="w-100 d-lg-none d-block"></span>
				        <Link className="navbar-brand d-none d-lg-inline-block" to="/">
				            <img src={Logo} alt="CalmerLogo" className="logo"/>
				        </Link>
				        <Link className="navbar-brand-two mx-auto d-lg-none d-inline-block" to="/">
				            <img src="//placehold.it/40?text=LOGO" alt="logo"/>
				        </Link>
				        <div className="w-100 text-right">
				            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
				                <span className="navbar-toggler-icon"></span>
				            </button>
				        </div>
				    </div>

				    <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar1">
				        <ul className="navbar-nav ml-auto flex-nowrap">
					        <li className="nav-item active">
								<Link className="nav-link mx-2 menu-item text-white" to="/"><small>Home</small> <span className="sr-only">(current) </span></Link>
							</li>
							{/*change <a> to <Link>*/}
				           
				            {/*<li className="nav-item dropdown">
								<Link className="nav-link dropdown-toggle mx-2 menu-item" to="/services" id="navbarDropdown"
								role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Services
								</Link>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<Link className="dropdown-item" href="/services">Events</Link>
									<Link className="dropdown-item" href="/services">Tourism</Link>
								</div>
			            	</li>*/}
			            	<li className="nav-item">
				                <Link className="nav-link mx-2 menu-item text-white" to="/services"><small>Services</small></Link>
				            </li>
				            <li className="nav-item">
				                <Link className="nav-link mx-2 menu-item text-white" to="/ourworks"><small>Gallery</small></Link>
				            </li>
				            <li className="nav-item">
				                <Link className="nav-link mx-2 menu-item text-white " to="/about"><small>About</small></Link>
				            </li>
				            <li className="nav-item">
				                <Link className="nav-link mx-2 menu-item text-white" to="/contact"><small>Contact</small></Link>
				            </li>
				            <li className="nav-item">
				            	<Button className="nav-link mx-2 menu-item text-white" variant="outline-success" size="sm">
				            		Sign in
				            	</Button>
				            </li>
				            <li className="nav-item">
				            	<Button
				            		className="nav-link mx-2 menu-item text-white"
				            		variant="success" onClick={this.handleShow}
				            		size="sm"
				            		block>
				            			Sign Up
				            	</Button>
				            </li>
				        </ul>
				    </div>
				</nav>

				<Modal show={this.state.show} onHide={this.handleClose}>
		        	<Modal.Header closeButton>
		        		<Modal.Title className="text-center">CalmerLogo</Modal.Title>
		        	</Modal.Header>
		        	
		        	<Modal.Body>
		        		<Modal.Title className="text-center">Create an account</Modal.Title>
		        		<SignupForm/>
		        		<p className="text-center"> By creating an account, you agree to CalmerB's Conditions
		        		of Use and Privacy Notice. </p>
		        	</Modal.Body>

		        	<Modal.Footer>
		        		<p className="text-center"> Already a member? Sign in</p>
		        	</Modal.Footer>
		        </Modal>
			</div>
		);
	}
}

export default NavBar