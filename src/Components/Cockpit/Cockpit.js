import React from 'react';

const cockpit = (props) => {
    let classes = []; // Will make a new string 'Red Bold'

    if (props.persons.length <= 2) {
      classes.push('Red');
    } 
    if (props.persons.length <= 1) {
      classes.push('Bold');
    }

    return (
        <div>
            <p className={classes.join(' ')}>Hello World!!</p>
            <button 
            style={props.style} // Injecting the style
            onClick={props.toggled}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;