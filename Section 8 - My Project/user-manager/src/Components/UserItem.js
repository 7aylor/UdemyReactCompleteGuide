import React from 'react';

const UserItem = props => {
    return (
        <div key={Math.random()}>
          {props.name} ({props.age} years old)
        </div>
    );
}

export default UserItem;