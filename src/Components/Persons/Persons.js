import React, { PureComponent } from 'react';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

class Persons extends PureComponent {
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

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
    }

    /**
     * Using PureComponent instead of Component already does that check for us
     * There is no need to implement shouldComponentUpdate anymore
     * 
     * Don't use it too much, only when update is not always necessary
     * 
     * It can impact performance drop since it compares every props
     * and states of the component each time shouldUpdateComponent is
     * called
     */
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
    //     /***It only checks the REFERENCE of the object, not the object itself!!!***/
    //     return nextProps.persons !==  this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked;
    //     // return true;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[UPDATE Persons.js] Inside componentDidUpdate');
    }

    render() {
        console.log('[Persons.js] Inside render');
        return (
            this.props.persons.map((person, index) => {
                return <ErrorBoundary key={person.id}>
                        <Person 
                            name={person.name}
                            age={person.age}
                            click={() => this.props.clicked(index)}
                            changed={(event) => {this.props.changed(event, person.id)}}
                        />
                        </ErrorBoundary>;
            })
        );
    }
}

export default Persons;