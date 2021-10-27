import React from "react";
import UserItem from './UserItem';

const Users = (props) => {
  return (
    <div className="card">
      {props.users.map(user => (
        <UserItem name={user.name} age={user.age} />
      ))}
    </div>
  );
};

export default Users;
