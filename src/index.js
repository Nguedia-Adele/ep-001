import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css';
import './styles/App.css';
import * as serviceWorker from './serviceWorker';

import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import OurWorks from './pages/OurWorks'
import About from './pages/About'
import Contact from './pages/Contact'
import Notfound from './pages/notfound'

import ServiceDetails from './pages/ServiceDetails'
import OrderDetails from './pages/OrderDetails'
import CheckOut from './pages/CheckOut'

import AdminDashBoard from './sellerPages/AdminDashBoard'
import ServicesList from './sellerPages/ServicesList'
import CalmerOrders from './sellerPages/CalmerOrders'
import AdminMessages from './sellerPages/AdminMessages'
import AdminNotifications from './sellerPages/AdminNotifications'

const routing = (
  <Router>
    <div>
	    <Switch>
	      <Route exact path="/" component={Home} />
	      <Route path="/services" component={Services} />
	      <Route path="/ourworks" component={OurWorks}/>
	      <Route path="/about" component={About}/>
	      <Route path="/contact" component={Contact} />

	      <Route path="/servicedetails" component={ServiceDetails} />
	      <Route path="/orderdetails" component = {OrderDetails} />
	      {/*<Route pages="checkout" component={CheckOut} />*/}
	      <Route path="/checkout" component={CheckOut} />

	      <Route path="/adminDashBoard" component={AdminDashBoard} />
	      <Route path="/serviceslist" component={ServicesList} />
	      <Route path="/calmerOrders" component={CalmerOrders} />
	      <Route path="/adminMessages" component={AdminMessages} />
	      <Route path="/adminNotifications" component={AdminNotifications} />
	      
	      <Route component={Notfound} />

	     </Switch>
	     
	     <footer>
			<Footer/>
		</footer>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
