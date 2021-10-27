import React, { useState } from 'react';
import './Card.css';
import CardInput from './CardInput';
import Button from './Button';

const AddUserCard = props => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState(0);

    const updateUsername = (newName) => {
        setUsername(newName);
    }

    const updateAge = (newAge) => {
        setAge(newAge);
    }

    const buttonClick = () => {
        const user = {
            name: username,
            age: age
        };

        setUsername("");
        setAge(0);

        console.log("in button click", user);
        props.addUserBtn(user);
    }

    return (
        <div className="card">
            <CardInput label={'Username'} change={updateUsername} type={"text"}/>
            <CardInput label={'Age (Years)'} change={updateAge} type={"number"}/>
            <Button text={'Add User'} click={buttonClick}/>
        </div>
    );
}

export default AddUserCard;