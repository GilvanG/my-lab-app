// https://www.youtube.com/watch?v=uY8t-isw5nY
import { useEffect, useState } from 'react';

import { Users } from '../../components/UserList';

export function HOC() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://api.github.com/users')
      .then(res => res.json())
      .then(users => setUsers(users))
    }, 1000);
  }, []);

  return (
    <Users users={users} isLoading={!!users.length} />
  );
}