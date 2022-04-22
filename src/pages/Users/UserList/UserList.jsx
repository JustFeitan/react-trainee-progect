import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './UserList.scss';
import UserService from "../../API/UserService";
import {useFetching} from "../../hooks/useFetching";
import UserCard from "../../components/Users/UserCard/UserCard";
import Loader from "../../components/UI/Loader/Loader";
import './UserList.scss'
const UserList = () => {
    const [users, setUsers] = useState([]);

    const [fetchUsers, isUsersLoading, userError] = useFetching(async () => {
        const response = await UserService.getAll();
        setUsers(response.data);
    })

    useEffect( () => {
        fetchUsers();
    }, [])

    return (
        <div className='users'>
            <h2>Список пользователей</h2>
            {userError &&
                <div>Ошибка {userError}</div>
            }
            {isUsersLoading
                ? <Loader/>
                : <div>
                    {users.map(user =>
                        <UserCard user={user} key={user.id}/>
                    )}
                </div>
            }

        </div>
    );
};

export default UserList;
