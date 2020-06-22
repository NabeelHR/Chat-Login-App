import React, { Component } from "react"
import axios from 'axios'
import "../App.css"

const formValid = (formErrors) => {
	let valid = true
	Object.values(formErrors).forEach((val) => {
		val.length > 0 && (valid = false)
	})

	return valid
}

class Signup extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: null,
			username: null,
			password: null,
			formErrors: {
				name: "",
				username: "",
				password: "",
			},
		}
	}

	handleChange = (e) => {
		e.preventDefault()
		const { name, value } = e.target
		let formErrors = this.state.formErrors

		switch (name) {
			case "name":
				formErrors.name =
					value.length < 3 ? "minimum 3 characters required" : ""
				break
			case "username":
				formErrors.username =
					value.length < 3 ? "minimum 3 characters required" : ""
				break
			case "password":
				formErrors.password =
					value.length < 6 ? "minimum 6 characters required" : ""
				break
			default:
				break
		}
		this.setState({ formErrors, [name]: value }, () => console.log(this.state));
	}

	handleSubmit = (e) => {
		e.preventDefault()
		if (formValid(this.state.formErrors)) {
			const newUser = {
				name: this.state.name,
				username: this.state.username,
				pwd: this.state.password
			}
			console.log(`Now submitting details for user ${this.state.name} with username ${newUser.username}`)
			axios.post('http://localhost:5000/users', newUser)
				.then(res => console.log(res.data))
				.catch(err => {})
		} else {
			console.error("Form invalid - incorrect format")
		}
	}
	render() {
		const { formErrors } = this.state;
		
		return (
			<div className="wrapper">
				<div className="form-wrapper">
					<h1>
						<strong>Create Account</strong>
					</h1>
					<form onSubmit={this.handleSubmit} noValidate>
						<div className="name">
							<label htmlFor="name">Full Name</label>
							<input
								type="text"
								className=""
								noValidate
								name="name"
								placeholder="Full Name"
								onChange={this.handleChange}
							/>
						{formErrors.name.length > 0 && (
							<span className="errorMessage">{formErrors.name}</span>
						)}

						</div>
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
						{formErrors.username.length > 0 && (
							<span className="errorMessage">{formErrors.username}</span>
						)}
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
						{formErrors.password.length > 0 && (
							<span className="errorMessage">{formErrors.password}</span>
						)}
						<div className="createAccount">
							<button type="submit">Create Account</button>
							<small>
								Or Login, if you already have an account
							</small>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default Signup
