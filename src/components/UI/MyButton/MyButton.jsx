import React from 'react';
import classes from './MyButton.module.scss';
const MyButton = ({children, isSubmit, ...props}) => {

    const rootStyles = [classes.myBtn];
    if (isSubmit) {
        rootStyles.push(classes.isSubmit);
    }

    return (
        <button className={rootStyles.join(' ')} {...props}>
            {children}
        </button>
    );
};

export default MyButton;
