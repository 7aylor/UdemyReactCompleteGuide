import React from 'react';
import './Button.css';

const Button = props => {
    return (
        <button type='button' onClick={props.click}>{props.text}</button>
    );
}

export default Button;