import  React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';


class Person extends Component {
	constructor(props) {
		super(props);
		console.log('[Person.js] Inside constructor', props);
	}

	componentWillMount() {
		console.log('[Person.js] Inside componentWillMount()');
	}

	componentDidMount() {
		console.log('[Person.js] Inside componentDidMount()');
	}
	
	render () {
		console.log('[Person.js] Inside render()');

		return(
			<Aux>
				<p onClick={this.props.click}>Hi, I'm a {this.props.name} and I am {this.props.age} years old!</p>
				<span>{this.props.children}</span>
				<input type="text" onChange={this.props.changed} value={this.props.name} />
			</Aux>
		);

		/* return [
			<p key="1" onClick={this.props.click}>Hi, I'm a {this.props.name} and I am {this.props.age} years old!</p>,
			<span key="2">{this.props.children}</span>,
			<input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
		] */
	}
}

export default withClass(Person, classes.Person);