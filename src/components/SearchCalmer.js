import React from 'react'
import {Form, Col, Row, Button} from 'react-bootstrap'

class SearchCalmer extends React.Component{
	render(){
		return(
			<div>
				<Form>
					<Form.Row>
						<Col xs={10}>
							<Form.Control
								className="mr-n5 ml-1 h50"
								id="textSearchCalmerHome"
								placeholder="Search calmer" />
						</Col>
						<Col xs={2}>
							<Button
							className="mr-1 ml-n3 h50"
							id="buttonSearchCalmerHome"
							variant="success"
							block>
				            	Search
				        	</Button>
						</Col>
					</Form.Row>
				</Form>
			</div>
		)
	}
}

class PopularCategories extends React.Component{
	render(){
		return(
			<div className="popularCategories">
				<Row>
					<Col>
						<p>Popular:</p>
					</Col>

					<Col>
						<Button variant="outline-success" block>Makeup</Button>
					</Col>

					<Col>
						<Button variant="outline-success" block>Cakes</Button>
					</Col>

					<Col>
						<Button variant="outline-success" block>Catering</Button>
					</Col>

					<Col>
						<Button variant="outline-success" block>Accomodation</Button>
					</Col>					
				</Row>
			</div>
		)
	}
}

export default SearchCalmer
export {PopularCategories}