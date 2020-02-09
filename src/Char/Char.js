import React from 'react';

const Char = (props) => {
    const style = {
        display : 'inline-block',
        padding : '16px',
        textAlign : 'center',
        margin : '16px',
        border : '1px solid blue'
    }

    return (
        <div style={style} onClick={props.delete}>{props.char}</div>
    )
}

export default Char;