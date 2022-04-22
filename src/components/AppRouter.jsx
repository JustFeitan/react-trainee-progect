import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Layout from "../pages/Layout";
import UserList from "../pages/Users/UserList/UserList";
import UserProfile from "../pages/Users/UserProfile/UserProfile";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<UserList/>}/>
                <Route path='profile/:id' element={<UserProfile/>}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;
