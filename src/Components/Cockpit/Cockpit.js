import React from 'react';

import Aux from '../../HigherOrderComponents/Aux'

const cockpit = (props) => {
    let classes = []; // Will make a new string 'Red Bold'

    if (props.persons.length <= 2) {
      classes.push('Red');
    } 
    if (props.persons.length <= 1) {
      classes.push('Bold');
    }

    return (
        /**
         * An alternative syntax to HOC is the empty JSX tag (<> </>)
         * 
         * You can't use className or other tag in it
         */
        <>
            <p className={classes.join(' ')}>Hello World!!</p>
            <button 
            style={props.style} // Injecting the style
            onClick={props.toggled}>Toggle Persons</button>
        </>
    );
};

export default cockpit;