import React, { Component } from 'react';

import './Person.css'

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
          persons: [
            {id: 'daf1213', name: "John", age: 28},
            {id: 'fdsaf34', name: "Manu", age: 29},
            {id: 'fdsfsa5', name: "Stephanie", age: 26}
          ],
          showPersons: false
        }
        console.log('[Person.js] Inside constructor', props);
    }

    componentWillMount() {
    console.log('[Person.js] Inside componentWillMount');
    }

    componentDidMount() {
    console.log('[Person.js] Inside componentDidMount');
    }
    render() {
        console.log('[Person.js] Inside render');
        return (
            <div className="Person">
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    };
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

export default Person;