import React from "react";
import axios from "axios";
import "./App.css";
// import data from "./data";
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			players: "",
		};
	}

	componentDidMount() {
		axios.get("http://localhost:5000/api/players").then((response) => {
			console.log(response);
			this.setState({
				players: response.data,
			});
			// console.log(this.setState);
		});
	}

	render() {
		return (
			<div className='App'>
				<h1>Players</h1>
				/*{" "}
				{this.state.players.map((player) => (
					<li>{player}</li>
				))}
			</div>
		);
	}
}
export default App;
