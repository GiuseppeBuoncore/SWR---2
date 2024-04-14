import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ShowGithubUser() {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const responseJson = await response.json()

        setUser(responseJson);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [username]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{user.login}</h2>
      <img src={user.avatar_url} alt={`${user.login} avatar`} />
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
    </div>
  );
}

export default ShowGithubUser;