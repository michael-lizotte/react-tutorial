import React, { Component } from 'react';

/**
 * function wrapper (stateless)
 */

// const withClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props} />
//         </div>
//     )
// }

/**
 * class wrapper (statefull)
 */

// const withClass = (WrappedComponent, className) => {
//     /**
//      * This class is anonymous
//      * It can modify it's state
//      */
//     return class extends Component {
//         render() {
//             return (
//                 <div className={className}>
//                     <WrappedComponent {...props} />
//                 </div>
//             );
//         }
//     }
// }

/**
 * class wrapper with references (statefull)
 */

const withClass = (WrappedComponent, className) => {
    /**
     * This class is anonymous
     * It can modify it's state
     */
    const WithClass = class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent {...props} />
                </div>
            );
        }
    }

    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwardRef={ref} />;
    })
}

export default withClass;