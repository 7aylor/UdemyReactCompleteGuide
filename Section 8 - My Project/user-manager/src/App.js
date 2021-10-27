import './App.css';
import AddUserCard from './Components/AddUserCard';
import Users from './Components/Users';
import React, { useState } from 'react';

function App() {

  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    users.push(user);
    setUsers(users);
    console.log("in add user", users);
  }

  return (
    <div className="App">
      <AddUserCard addUserBtn={addUser} />
      {users.length > 0 && (<Users users={users} />)}
    </div>
  );
}

export default App;
