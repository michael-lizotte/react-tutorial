import React, { Component } from 'react';

import './Person.css'

const person = (props) => {
    const rnd = Math.random();

    if (rnd > 0.7) {
        throw new Error("Error message");
    }

    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

/*
 * When using class-based components, its 'this.props'
 * 
 * class Person extends Component {
 *  render() {
 *      return <p>My name is {this.props.name}</p>;
 *  }
 * }
 */

export default person;