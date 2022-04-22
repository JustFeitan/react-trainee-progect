import React from 'react';
import UserList from "../../pages/Users/UserList/UserList";
import './Layout.scss'
const Layout = () => {
    return (
        <div className='App'>
            {/*<Navbar/>*/}
            <main>
                <UserList/>
            </main>
        </div>
    );
};

export default Layout;
