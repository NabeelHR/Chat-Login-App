import React, { Component } from "react"
import axios from "axios"
import "../App.css"

class WelcomeScreen extends Component {
	constructor(props) {
		super(props)
		this.state = {
			usersAvailable: [],
		}
	}
	componentWillMount() {
		axios.get(`http://localhost:5000/users`)
		    .then(res => {
                res.data.map(user => {
                    this.setState({ 
                        usersAvailable: this.state.usersAvailable.concat([user.name])
                      })
                })
            })
            .catch(err => console.log(err))
	}
	render() {
		return (
			<div className="container">
				<h1>You have successfully signed in!</h1>
				<div className="createAccount">
					<button type="submit" onClick={() => this.props.logout()}>
						Sign Out
					</button>
				</div>
				<div className="row">
					<h2>
						You can reach out to the following people in our netwowk
						anyone of the following people!
					</h2>
					<ul>
						{this.state.usersAvailable.map((value, index) => {
							return <li key={index}>{value}</li>
						})}
					</ul>
				</div>
			</div>
		)
	}
}

export default WelcomeScreen
