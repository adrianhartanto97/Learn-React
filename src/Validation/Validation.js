import React from 'react';

const Validation = (props) => {
    let result = null;
    if (props.textLength > 5 ) {
        result = <p> Text long enough</p>
    } else {
        result = <p> Text too short</p>
    }

    return result
}

export default Validation;