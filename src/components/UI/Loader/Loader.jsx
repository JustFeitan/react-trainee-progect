import React from 'react';
import './Loader.scss'
const Loader = () => {
    return (
        <div className='loader__wrapper'>
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    );
};

export default Loader;
