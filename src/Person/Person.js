import  React from 'react';


import classes from './Person.css';

const person  = (props) => {
	const rnd = Math.random();

	if(rnd > 0.7) {
		throw new Error('Deu zica');
	}
	return (
		<div className={classes.Person} >
			<p onClick={props.click}>Hi, I'm a {props.name} and I am {props.age} years old!</p>
			<span>{props.children}</span>
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
	);
}

export default person;