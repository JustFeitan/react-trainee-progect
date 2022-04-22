import React from 'react';
import './UserCard.scss'
const UserCard = ({user}) => {
    return (
        <div  className="users__card">
            <div className="users__card-info">
                <div className="users__card-info-field">
                    <span>ФИО: </span>{user.name}
                </div>
                <div className="users__card-info-field">
                    <span>город: </span> {user.address.city}
                </div>
                <div className="users__card-info-field">
                    <span>компания: </span>{user.company.name}
                </div>
            </div>
            <a to=''>Подробнее</a>
        </div>
    );
};

export default UserCard;
