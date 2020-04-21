import React from "react";
import axios from "axios";
import "./App.css";
import PlayerList from './components/PlayerList';
import Nav from'./components/Nav';
// import useFetch from './components/customHook';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			players: []
		};
	}

	// async componentDidMount(){
	// 	const [players] = await useFetch('get', 'http://localhost:5000/api/players')
	// 	this.setState({
	//	...this.state, 
	//	data: data
	//})
	// }
	
	componentDidMount() {
		axios.get("http://localhost:5000/api/players")
		.then((response) => {
			console.log("response", response.data);
			this.setState({ 
				...this.state, players: response.data,
			})
		})
		.catch(err => console.log(err))
	}

	render() {
		console.log('players: ', this.state)
		return (
			<div className='App' data-testid='app'>
				<Nav/>
				<PlayerList dataFromState={this.state.players}/>
			</div> 
		);
	}
}
export default App;
