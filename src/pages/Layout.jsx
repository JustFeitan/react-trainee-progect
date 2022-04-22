import React, {useState} from 'react';
import './Layout.scss'
import SideBar from "../components/UI/SideBar/SideBar";
import {Outlet} from 'react-router-dom'
import {FilterContext} from "../context";


const Layout = () => {
    const [filter, setFilter] = useState({sort: ''});
    return (
        <div className='App'>
            <SideBar
                setFilter={setFilter}
                filter={filter}
            />
            <main>
                <FilterContext.Provider
                    value={{
                        filter,
                        setFilter
                    }}
                >
                    <Outlet/>
                </FilterContext.Provider>
            </main>
        </div>
    );
};

export default Layout;
