import React from 'react'
import Header from './Header'
import MainContent from './MainContent'

export default class Home extends React.Component{

	constructor(){
		super();
		this.state = {
			name: 'Parth'
		}
		this.changeName = this.changeName.bind(this);
	}

	//states are immutable

	changeName(){
		this.setState({
			name: 'Rohit'
		})



	}

	//Lifecycle Method - gets invoked automatically whenever a component is rendered successfully
	// componentDidMount(){
	// 	this.setState({
	// 		name: 'Rohit'
	// 	})
	// }


	//Lifecycle Method - gets invoked automatically whenever a component is deleted successfully
	// componentWillUnmount(){}

	render(){
		return(
			<>
				<h1>Hello {this.state.name}</h1>
				<button onClick={this.changeName}>Click Me</button>	
			</>
		)
	}
}