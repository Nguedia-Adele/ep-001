import React from 'react'

import {Form, Row, Col, InputGroup, Button} from 'react-bootstrap'

class AddService extends React.Component{
	render(){
		return(
			<div>
				<Form>
					<Form.Group as={Row} controlId=" ">
						<Form.Label column sm={2}> Service: </Form.Label>
						<Col sm={10}>
							<Form.Control placeholder="Enter service name" />
						</Col>
					</Form.Group>

					<Form.Group as={Row} controlId=" ">
						<Form.Label column sm={2}> Category: </Form.Label>
						<Col sm={10}>
							<Form.Control placeholder="Enter service category" />
						</Col>
					</Form.Group>

					<Form.Group as={Row} controlId=" ">
						<Form.Label column sm={2}>Image:</Form.Label>
						<Col sm={10}>
							<InputGroup>
								<Form.Control
									type="text"
									placeholder="Select files"
									aria-describedby="inputGroupAppend"
								/>
								<InputGroup.Append>
									<InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
								</InputGroup.Append>
							</InputGroup>
						</Col>
					</Form.Group>

					<Form.Group as={Row} controlId=" ">
						<Form.Label column sm={2}> Details:</Form.Label>
						<Col sm={10}>
					    	<Form.Control as="textarea" rows="3" placeholder="Enter service description"/>
						</Col>
					</Form.Group>

					<div className="text-center">
						<Form.Check type="checkbox" label="service item 1"/>
						<Form.Check type="checkbox" label="service item 2"/>
						<Form.Check type="checkbox" label="service item 3"/>
						<Form.Check type="checkbox" label="service item 4"/>
					</div>

					<div className="text-right">
						<Button variant="primary">SAVE</Button>
					</div>
				</Form>
			</div>
		)
	}
}

export default AddService