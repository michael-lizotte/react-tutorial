import React, { Component } from 'react';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

class Persons extends Component {
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
        console.log('[Persons.js] Inside constructor', props);
    }

    componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount');
    }

    componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount');
    }

    render() {
        console.log('[Persons.js] Inside render');
    return (
        this.props.persons.map((person, index) => {
            return <ErrorBoundary><Person 
                                    name={person.name}
                                    age={person.age}
                                    click={() => this.props.clicked(index)}
                                    changed={(event) => {this.props.changed(event, person.id)}}
                                    key={person.id} />
                    </ErrorBoundary>;
        })
    );
    }
}

export default Persons;