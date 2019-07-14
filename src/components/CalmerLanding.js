import React from 'react'

import '../styles/home.css';

import SearchCalmer, {PopularCategories} from './SearchCalmer'

class CalmerLanding extends React.Component{
	render(){
		return(
			<div>
				<div className="imagebox">
					<img src="//placeimg.com/1350/550/tech" alt="landing"
					className="category-banner img-responsive"/>
					<span className="imagebox-desc">
						<h1 className="text-center mt-3">CALMER B: THE EVENT HOTSHOT</h1>
						<SearchCalmer/>
						<PopularCategories/>
					</span>
				</div>

				<CalmerPartners/>
			</div>
		)
	}
}

class CalmerPartners extends React.Component{
	render(){
		return(
			<div id="thisDFlexBox" className="d-flex c-flex justify-content-sm-around">
				<ul>
					<li>
						<p><small>Item 1</small></p>
					</li>
					<li>
						<p><small>item 2</small></p>
					</li>
					<li>
						<p><small>item 3</small></p>
					</li>
					<li>
						<p><small>item 4</small></p>
					</li>
					<li>
						<p><small>item 5</small></p>
					</li>
					<li>
						<p><small>item 6</small></p>
					</li>
					<li>
						<p><small>item 7</small></p>
					</li>
				</ul>
			</div>
		)
	}
}

export default CalmerLanding