import React, { Component } from 'react';

const User = (props) =>
{
    return(
    <div>
    <li>
        <span>name={props.children},age={props.age}</span>
        <button onClick={props.delEvent}>Delete</button>
    </li>
    </div>
    )
}

export default User;