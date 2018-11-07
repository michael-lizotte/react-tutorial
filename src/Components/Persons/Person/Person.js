import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Person.css'
import Aux from '../../../HigherOrderComponents/Aux'

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
        console.log('[Person.js] Inside constructor', props);
    }

    componentWillMount() {
    console.log('[Person.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount');
        if ( this.props.position === 0 ) {
            this.inputElement.current.focus();
        }
    }

    focus() {
        this.inputElement.current.focus();
    }

    render() {
        console.log('[Person.js] Inside render');
        return (
            <Aux className="Person">
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input 
                    ref={this.inputElement}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </Aux>
        )
    };
};

/**
 * Post-editing the class to implement 'prop-types' library
 */
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

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