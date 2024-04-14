import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

function GithubUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://api.github.com/users');
        const responseJson = await response.json()
        
        setUsers(responseJson);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Github Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>

      <Outlet/>
    </div>
  );
}

export default GithubUserList;
