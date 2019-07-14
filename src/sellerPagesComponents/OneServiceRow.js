import React from 'react'

import { Link } from "react-router-dom";

import {FaRegTrashAlt} from 'react-icons/fa';

class OneServiceRow extends React.Component{
	render(){
		return(
			<div className="container-fluid">	
				<table className="table shadow-sm shadow-sm mt-1 px-2">
						<thead className="border bg-light">
							<tr>
								<td>Service</td>
								<td>Category</td>
								<td>Posted on</td>
								<td>Orders</td>
								<td>Searches</td>
								<td>Status</td>
								<td>Action</td>
							</tr>
						</thead>
						<tbody>
							<tr className="border">
								<td>Event Planning</td>
								<td>Events</td>
								<td>Month Day Year</td>
								<td>23</td>
								<td>56</td>
								<td>Active</td>
								<td>
									<Link className="mx-2 text-danger"><FaRegTrashAlt/></Link>
								</td>
							</tr>

							{/*delete repetition*/}
							<tr className="border">
								<td>Event Planning</td>
								<td>Events</td>
								<td>Month Day Year</td>
								<td>23</td>
								<td>56</td>
								<td>Active</td>
								<td>
									<Link className="mx-2 text-danger"><FaRegTrashAlt/></Link>
								</td>
							</tr>

							<tr className="border">
								<td>Event Planning</td>
								<td>Events</td>
								<td>Month Day Year</td>
								<td>23</td>
								<td>56</td>
								<td>Active</td>
								<td>
									<Link className="mx-2 text-danger"><FaRegTrashAlt/></Link>
								</td>
							</tr>

							<tr className="border">
								<td>Event Planning</td>
								<td>Events</td>
								<td>Month Day Year</td>
								<td>23</td>
								<td>56</td>
								<td>Active</td>
								<td>
									<Link className="mx-2 text-danger"><FaRegTrashAlt/></Link>
								</td>
							</tr>

							<tr className="border">
								<td>Event Planning</td>
								<td>Events</td>
								<td>Month Day Year</td>
								<td>23</td>
								<td>56</td>
								<td>Active</td>
								<td>
									<Link className="mx-2 text-danger"><FaRegTrashAlt/></Link>
								</td>
							</tr>

							<tr className="border">
								<td>Event Planning</td>
								<td>Events</td>
								<td>Month Day Year</td>
								<td>23</td>
								<td>56</td>
								<td>Active</td>
								<td>
									<Link className="mx-2 text-danger"><FaRegTrashAlt/></Link>
								</td>
							</tr>

							<tr className="border">
								<td>Event Planning</td>
								<td>Events</td>
								<td>Month Day Year</td>
								<td>23</td>
								<td>56</td>
								<td>Active</td>
								<td>
									<Link className="mx-2 text-danger"><FaRegTrashAlt/></Link>
								</td>
							</tr>

							<tr className="border">
								<td>Event Planning</td>
								<td>Events</td>
								<td>Month Day Year</td>
								<td>23</td>
								<td>56</td>
								<td>Active</td>
								<td>
									<Link className="mx-2 text-danger"><FaRegTrashAlt/></Link>
								</td>
							</tr>

							<tr className="border">
								<td>Event Planning</td>
								<td>Events</td>
								<td>Month Day Year</td>
								<td>23</td>
								<td>56</td>
								<td>Active</td>
								<td>
									<Link className="mx-2 text-danger"><FaRegTrashAlt/></Link>
								</td>
							</tr>
						{/*delete repetition*/}
						</tbody>
					</table>
			</div>
		)
	}
}

export default OneServiceRow