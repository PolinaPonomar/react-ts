import axios from 'axios';
import React, {FC, useEffect, useState} from 'react';
import { IUser } from '../types/types';
import List from '../components/List';
import UserList from '../components/UserList';

const UserPage:FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect( () => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data);
    } catch (e) {
        alert(e)
    }
  }
  
  return (
    <List
      items={users}
      renderItem={(user: IUser) => <UserList users={users} key={user.id}/>}
    />
  )
};

export default UserPage;
