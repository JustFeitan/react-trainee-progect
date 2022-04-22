import React, {useCallback, useMemo} from 'react';
import './FormInput.scss'

const FormInput = ({input, register, getFieldState, formState}) => {
    const {label, name, ...inputProps} = input;
    const field = getFieldState(name, formState);
    console.log('render');
    return (
        <div >
            <div className='label'>
                {label}
            </div>
            {!!field.error &&
                <div className='error-message'>{field.error?.message}</div>
            }
            <input
                className={!field.error? 'input' : 'input not-valid'}
                {...register(name)}
                {...inputProps}
            />
        </div>
    );
};

export default FormInput;
