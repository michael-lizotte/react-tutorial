import React, { PureComponent } from 'react';

import './App.css';
import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit'

/*
 * Lifecycle of React components
 * 
 * 1. constructor(props)
 *      Should be used to initialize the state
 *      Never cause side-effects (ex: fetching web content)
 *      *Must call 'super(props)'
 * 2. componentWillMount()
 *      Useless
 * 3. render()
 *      It prepares and structures JSX code
 *      *Doesn't manipulate the real DOM
 * 4. render child components
 * 5. componentDidMount()
 *      Can cause sid-effects in it but never update the state
 *      It will cause the component to re-render
 */

class App extends PureComponent {

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
    console.log('[App.js] Inside constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   /***It only checks the REFERENCE of the object, not the object itself!!!***/
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

  // state = {
  //   persons: [
  //     {id: 'daf1213', name: "John", age: 28},
  //     {id: 'fdsaf34', name: "Manu", age: 29},
  //     {id: 'fdsfsa5', name: "Stephanie", age: 26}
  //   ],
  //   showPersons: false
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex] // This syntax propagate properties of 'this.state.persons[...]' into the object
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (index) => {
    // Calling slice without arguments copies the array instead
    // of passing it by reference
    // alt syntax: [...this.state.persons]
    const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    console.log('[App.js] Inside render')

    // Inline styling using javascript and injecting it in the button's style
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
                  persons={this.state.persons}
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangedHandler}
                />;

      style.backgroundColor = 'red';
    }

    return (
      <div className="App">
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit 
          persons={this.state.persons}
          style={style}
          toggled={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
