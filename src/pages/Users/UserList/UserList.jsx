import React, {useContext, useEffect, useState} from 'react';
import UserService from "../../../API/UserService";
import {useFetching} from "../../../hooks/useFetching";
import UserCard from "../../../components/UserCard/UserCard";
import Loader from "../../../components/UI/Loader/Loader";
import './UserList.scss'
import {useUsers} from "../../../hooks/useUsers";
import {FilterContext} from "../../../context";
const UserList = () => {

    const [users, setUsers] = useState([]);
    const {filter, setFilter} = useContext(FilterContext);
    const sortedUsers = useUsers(users, filter.sort);

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
                    {sortedUsers.map(user =>
                        <UserCard user={user} key={user.id}/>
                    )}
                </div>
            }

        </div>
    );
};

export default UserList;
