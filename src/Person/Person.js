import  React from 'react';

import './Person.css';

const person  = (props) => {
	return (
		<div className="Person">
			<p onClick={props.click}>Hi, I'm a {props.name} and I am {props.age} years old!</p>
			<span>{props.children}</span>
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
	);
}

export default person;