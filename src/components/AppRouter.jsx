import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Layout from "../pages/Layout";
import UserList from "../pages/Users/UserList/UserList";
const AppRoiter = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<UserList/>}/>
            </Route>
        </Routes>
    );
};

export default AppRoiter;
