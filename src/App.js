import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'daf1213', name: "John", age: 28},
      {id: 'fdsaf34', name: "Manu", age: 29},
      {id: 'fdsfsa5', name: "Stephanie", age: 26}
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex] // This syntax propagate properties of 'this.state.persons[...]' into the object
    };

    person.name = event.input.value;

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
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => {this.nameChangedHandler(event, person.id)}}
              key={person.id} />;
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    let classes = []; // Will make a new string 'Red Bold'

    if (this.state.persons.length <= 2) {
      classes.push('Red');
    } 
    if (this.state.persons.length <= 1) {
      classes.push('Bold');
    }

    return (
      <div className="App">
        <p className={classes.join(' ')}>Hello World!!</p>
        <button 
          style={style} // Injecting the style
          onClick={this.togglePersonsHandler}>Toggle Persons</button> {/* Can be inefficient, it's prefered to use the
                                                                      other syntax */}
        {persons}
      </div>
    );
  }
}

export default App;
