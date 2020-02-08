import React, { Component } from 'react'
import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className="Box">
            <p>Name : {props.name}</p>
            <p>Information</p>
        </div>
    )
}

export default UserOutput



