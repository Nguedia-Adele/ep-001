import React from 'react'

import AdminNavBar from '../sellerPagesComponents/AdminNavBar'

class AdminDashBoard extends React.Component{
	render(){
		return(
			<div>
				<AdminNavBar/>
				<h1 className="xl-font">WELCOME</h1>
				<h1>@userName</h1>
			</div>
		)
	}
}

export default AdminDashBoard