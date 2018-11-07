import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
		super(props);
        console.log('[Persons.js] Inside constructor', props);
        
        this.lastPersonRef = React.createRef();
	}

	componentWillMount() {
		console.log('[Persons.js] Inside componentWillMount()');
	}

	componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount()');
        
        this.lastPersonRef.current.focus();
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] componentWillRecievePorpos', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] shouldComponentUpdate', nextProps, nextState);
        return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked;
    }
    
    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[UPDATE Persons.js] componentDidUpdate');
    }

    render () {
        console.log('[Persons.js] Inside render()');
        return (
        this.props.persons.map((person, index) => {
            return (
                <Person
                    name={person.name}
                    position={index}
                    age={person.age}
                    ref={this.lastPersonRef}
                    click={() => this.props.clicked(index)}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                />
            );
        }));
    }
}

export default Persons;