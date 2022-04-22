import React from 'react';
import {Link} from "react-router-dom";
const UserCard = ({user}) => {

    return (
        <div  className='users__card'>
            <div className='users__card-info'>
                <div >
                    <span>ФИО: </span>{user.name}
                </div>
                <div >
                    <span>город: </span> {user.address.city}
                </div>
                <div >
                    <span>компания: </span>{user.company.name}
                </div>
            </div>
            <Link to={`profile/${user.id}`}>Подробнее</Link>
        </div>
    );
};

export default UserCard;
