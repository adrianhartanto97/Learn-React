import React from 'react';

const UserInput = (props) => {
    let style = {
        border : '1px solid blue'
    }
    return (
        <input type="text" onChange={props.changeName} value={props.name} style={style}/>
    );
}

export default UserInput;