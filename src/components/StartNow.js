import React from 'react'

import {Card, Button} from 'react-bootstrap'

class StartNow extends React.Component{
	render(){
		return(
			<div className="row">
				<Card className="text-white text-center">
					<Card.Img src="http://placeimg.com/1350/250/tech" alt="Card image" />
					<Card.ImgOverlay>
						<h3 className="font-weight-bold mt-5">HIRE AN EVENT ORGANISER TODAY</h3>
						<Card.Text>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s.
						</Card.Text>
						<Button variant="success" href="/services"> Get Started</Button>
					</Card.ImgOverlay>
				</Card>
			</div>
		)
	}
}

export default StartNow