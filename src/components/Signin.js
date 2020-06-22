import React, { Component } from "react"
import "../App.css"
import WelcomeScreen from "./WelcomeScreen" 

import axios from 'axios'

class Signin extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: null,
			password: null,
			isLoggedIn: false,
		}
	}

	handleChange = (e) => {
		e.preventDefault()
		const { name, value } = e.target
		this.setState({  [name]: value }, () => console.log(this.state));
	}
	logout = () => {
		console.log("LOGOUT FOO CALLED")
		// e.preventDefault()
		this.setState({
			username: null,
			password: null,
			isLoggedIn: false,		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		console.log(`Now submitting details for user ${this.state.name} with username ${this.state.username}`)
		axios.get(`http://localhost:5000/users/${this.state.username}`)
			.then(res => {
				console.log("GET request made")
				if (res.data.length > 0 && (res.data[0].pwd === this.state.password)){
					// console.log(this.state.isLoggedIn)
					console.log(res.data.length, res.data)
					console.log("login authenticated")
					this.setState ({
						isLoggedIn: true,
					})
				} else {
					console.log("invalid login details")
				}
			})
			.catch(err => console.log(err))
	}
	render() {
		if (this.state.isLoggedIn){
			return <WelcomeScreen logout={this.logout}/>
		}else{

			return (
				<div className="wrapper">
					<div className="form-wrapper">
						<h1>
							<strong>Sign in</strong>
						</h1>
						<form onSubmit={this.handleSubmit} noValidate>
							<div className="username">
								<label htmlFor="username">Username</label>
								<input
									type="text"
									className=""
									noValidate
									name="username"
									placeholder="Username"
									onChange={this.handleChange}
								/>
							</div>
							<div className="password">
								<label htmlFor="password">Password</label>
								<input
									type="password"
									className=""
									noValidate
									name="password"
									placeholder="Password"
									onChange={this.handleChange}
								/>
							</div>
							<div className="createAccount">
								<button type="submit">Sign In</button>
							</div>
						</form>
					</div>
				</div>
			)
		}
	}
}

export default Signin