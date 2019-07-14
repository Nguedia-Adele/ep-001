import React from 'react'
import {Button, Form, Row, Col} from 'react-bootstrap'

class LoginForm extends React.Component{
	render(){
		return(
			<div className="px-5 py-3">
				<Form>
					<Form.Group as={Row} controlId="formHorizontalUserName">
					    <Col>
					    	<Form.Control placeholder="User name" />
					    </Col>
					</Form.Group>

					<Form.Group as={Row} controlId="formHorizontalPassword">
					    <Col>
						    <Form.Control type="password" placeholder="Password" />
					    </Col>
					</Form.Group>
					<Button variant="primary" block onClick={this.handleClose}>
		            	Login
		        	</Button>
				</Form>
			</div>
		)
	}
}

export default LoginForm