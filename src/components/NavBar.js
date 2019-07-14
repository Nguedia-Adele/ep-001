import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import { Link } from "react-router-dom";

import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

import Logo from '../images/Logo.png'

class NavBar extends React.Component{
	constructor(props, context) {
    	super(props, context);

    	this.handleShowLogin = this.handleShowLogin.bind(this);
    	this.handleCloseLogin = this.handleCloseLogin.bind(this);
    	this.handleShowSignup = this.handleShowSignup.bind(this);
    	this.handleCloseSignup = this.handleCloseSignup.bind(this);

    	this.state = {
    		show: false,
    		showSignup: false,
    	};
	}

	handleCloseLogin() {
    	this.setState({ show: false });
	}

	handleShowLogin() {
		this.setState({ show: true });
	}

	handleCloseSignup() {
    	this.setState({ showSignup: false });
	}

	handleShowSignup(){
		this.setState({ showSignup:true})
	}

	render(){
		return(
			<div>
				<nav id="CalmerNavbar1"
					className="navbar navbar-expand-lg navbar-light fixed-top transparent">
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
				            	<Button
				            		className="nav-link mx-2 menu-item text-white"
				            		variant="outline-success"
				            		size="sm"
				            		onClick = {this.handleShowLogin}
				            		>
				            		Sign in
				            	</Button>
				            </li>
				            <li className="nav-item">
				            	<Button
				            		className="nav-link mx-2 menu-item text-white"
				            		variant="success"
				            		onClick ={this.handleShowSignup}
				            		size="sm">
				            			Sign Up
				            	</Button>
				            </li>
				        </ul>
				    </div>
				</nav>

				<Modal id="signup" show={this.state.showSignup} onHide={this.handleCloseSignup} >
		        	<Modal.Header closeButton>
		        		<img src={Logo} alt="CalmerLogo" className="logo"/>
		        	</Modal.Header>
		        	
		        	<Modal.Body>
		        		<Modal.Title className="text-center">CREATE AN ACCOUNT</Modal.Title>
		        		<SignupForm/>
		        		<div className="px-5">
			        		<p className="text-center small">
			        			By creating an account, you agree to CalmerB's Conditions of Use and Privacy Notice.
			        		</p>
		        		</div>
		        	</Modal.Body>

		        	<Modal.Footer>
		        		<p className="text-center"> Already a member? Sign in</p>
		        	</Modal.Footer>
		        </Modal>

		        <Modal id="login" show={this.state.show} onHide={this.handleCloseLogin}>
		        	<Modal.Header closeButton>
		        		<img src={Logo} alt="CalmerLogo" className="logo"/>
		        	</Modal.Header>
		        	
		        	<Modal.Body>
		        		<Modal.Title className="text-center">USER LOGIN</Modal.Title>
		        		<LoginForm/>
		        	</Modal.Body>

		        	<div className="pb-4">
		        		<p className="text-center">Don't have an account? Sign up</p>
		        	</div>
		        </Modal>
			</div>
		);
	}
}

export default NavBar


/*change <a> to <Link>*/

/*<li className="nav-item dropdown">
	<Link className="nav-link dropdown-toggle mx-2 menu-item" to="/services" id="navbarDropdown"
	role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		Services
	</Link>
	<div className="dropdown-menu" aria-labelledby="navbarDropdown">
		<Link className="dropdown-item" href="/services">Events</Link>
		<Link className="dropdown-item" href="/services">Tourism</Link>
	</div>
</li>*/