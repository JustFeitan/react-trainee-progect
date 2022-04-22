import React from 'react';
import './SideBar.scss'
import MyButton from "../MyButton/MyButton";

const SideBar = ({filter, setFilter}) => {

    return (
        <aside className ='sidebar'>
            <div className='sidebar__sort'>
                <p>Сортировка</p>
                <MyButton onClick={()=> setFilter({...filter, sort: 'city'})}>по городу</MyButton>
                <MyButton onClick={()=> setFilter({...filter, sort: 'company'})}>по компании</MyButton>
            </div>
        </aside>
    );
};

export default SideBar;
