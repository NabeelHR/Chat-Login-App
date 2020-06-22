import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Signup from "./Signup"
import Signin from "./Signin"
import Navbar from "./Navbar"

class Main extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 	};
	// }
	componentDidMount(){
		return <div><h1>KYUNNN</h1> </div>
	}
	render() {
		return (
			<div className="container">
				<Router>
					<Navbar />
					<br />
					<Route path="/" exact component={Signup} />
					<Route path="/signup" exact component={Signup} />
					<Route path="/signin" exact component={Signin} />
				</Router>
			</div>
		)
	}
}

export default Main
