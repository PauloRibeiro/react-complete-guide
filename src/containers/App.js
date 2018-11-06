import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';


class App extends PureComponent {
	constructor(props) {
		super(props);
		console.log('[App.js] Inside constructor', props);

		this.state = {
			persons: [
				{id: 1, name: 'Max', age: 28 },
				{id: 2, name: 'Manu', age: 29 },
				{id: 3, name: 'Stephany', age: 26 }
			],
			showPersons: false,
		}
	}

	componentWillMount() {
		console.log('[App.js] Inside componentWillMount()');
	}

	componentDidMount() {
		console.log('[App.js] Inside componentDidMount()');
	}

	/* shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate', nextProps, nextState);
        return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
    } */
    
    componentWillUpdate(nextProps, nextState) {
        console.log('[App.js] componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
    }

	/* state = {
		persons: [
			{id: 1, name: 'Max', age: 28 },
			{id: 2, name: 'Manu', age: 29 },
			{id: 3, name: 'Stephany', age: 26 }
		],
		showPersons: false,
	} */

	nameChangedHendler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});

		const person = { 
			...this.state.persons[personIndex]
		}

		person.name = event.target.value;

		const persons = [...this.state.persons];

		persons[personIndex] = person;

		this.setState({
			persons: persons
		});
	}

	deletePersonHandler = (personIndex) => {
		const persons = [...this.state.persons];

		persons.splice(personIndex, 1);

		this.setState({
			persons: persons,
		});
	}

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;

		this.setState({
			showPersons: !doesShow,
		});
	}

  render() {
	  console.log('[App.js] Inside render()');
	let persons = null;
	
	if(this.state.showPersons) {
		persons = <Persons
					persons={ this.state.persons }
					clicked={ this.deletePersonHandler }
					changed={ this.nameChangedHendler }	/>;
	}

    return (
      	<Aux classes={classes.App}>
		  <button onClick={() =>{this.setState({showPersons: true})}}>Show Persons</button>
		  <Cockpit
		  appTitle={ this.props.title }
		  showPersons={ this.state.showPersons }
		  persons={ this.state.persons }
		  clicked={ this.togglePersonsHandler } />
	      {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);