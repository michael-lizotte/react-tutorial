import React, { Component } from 'react';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

class Persons extends Component {
    render() {
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