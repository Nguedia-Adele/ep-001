import React from 'react'
import {Button, Form, Row, Col} from 'react-bootstrap'

class SignupForm extends React.Component{
	render(){
		return(
			<div>
				<Form>
					<Form.Group as={Row} controlId="formHorizontalName">
					    <Col>
					    	<Form.Control placeholder="First name" />
					    </Col>
					    <Col>
					    	<Form.Control placeholder="Last name" />
					    </Col>
					</Form.Group>

					<Form.Group as={Row} controlId="formHorizontalEmail">
					    <Col>
					    	<Form.Control type="email" placeholder="Email" />
					    </Col>
					</Form.Group>

					<Form.Group as={Row} controlId="formHorizontalPassword">
					    <Col>
						    <Form.Control type="password" placeholder="Password" />
					    </Col>
					</Form.Group>

					<Form.Group as={Row} controlId="formHorizontalPassword">
					    <Col>
						    <Form.Control type="password" placeholder="Confirm Password" />
					    </Col>
					</Form.Group>
					
					<Button variant="primary" block onClick={this.handleClose}>
		            	Create Account
		        	</Button>
				</Form>
			</div>
		)
	}
}

export default SignupForm