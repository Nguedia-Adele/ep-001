import React from 'react'


import AdminNavBar from '../sellerPagesComponents/AdminNavBar'
import {Modal} from 'react-bootstrap'

import OneServiceRow from '../sellerPagesComponents/OneServiceRow'
import AddService from '../sellerPagesComponents/AddService'

class ServicesList extends React.Component{
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
				<AdminNavBar/>

				<main className="container-fluid px-3">
					<div className="row mt-5 ml-2">
						<div className="col-sm-9">
							<h2>List of Calmer-B Services</h2>
							<h5>105 found</h5>
						</div>
						<div className="col-sm-3 text-right py-auto">
							<button type="button" className="btn btn-primary mt-4 mr-3" onClick={this.handleShow}>Add New</button>
						</div>
					</div>

					<OneServiceRow/>
				</main>

				<Modal
					aria-labelledby="contained-modal-title-vcenter"
					centered
					show={this.state.show}
					onHide={this.handleClose}
				>
		        	<Modal.Header className="bg-light" closeButton>
		        		<Modal.Title className="text-center">Add a service</Modal.Title>
		        	</Modal.Header>
		        	
		        	<Modal.Body>
		        		<AddService/>
		        	</Modal.Body>
		        </Modal>
			</div>
		)
	}
}

export default ServicesList