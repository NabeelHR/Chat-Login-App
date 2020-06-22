import React, { Component } from "react"
import "../App.css"
import axios from 'axios'

const formValid = (formErrors) => {
	let valid = true
	Object.values(formErrors).forEach((val) => {
		val.length > 0 && (valid = false)
	})

	return valid
}

class Signin extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: null,
			password: null,
		}
	}

	handleChange = (e) => {
		e.preventDefault()
		const { name, value } = e.target
		this.setState({  [name]: value }, () => console.log(this.state));
	}

	handleSubmit = (e) => {
		e.preventDefault()
		console.log(`Now submitting details for user ${this.state.name} with username ${this.state.username}`)
		axios.get(`http://localhost:5000/users/${this.state.username}`)
			.then(res => {
				console.log("GET request made")
				if (res.data.length > 0 && (res.data[0].pwd === this.state.password)){
					console.log(res.data.length, res.data)
					console.log("login authenticated")
				} else {
					console.log("invalid login details")
				}
			})
			.catch(err => console.log(err))
	}
	render() {
		const { formErrors } = this.state;
		
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

export default Signin