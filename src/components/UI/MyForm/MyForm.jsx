import React from 'react';
import FormInput from "../FormInput/FormInput";
import './MyForm.scss'
import MyButton from "../MyButton/MyButton";

const MyForm = ({
                    formName,
                    inputs,
                    formReadOnly,
                    changeFormDisabled,
                    register,
                    handleSubmit,
                    getFieldState,
                    formState
                }) => {


    return (
        <form onSubmit={handleSubmit} className='form'>
            <div className='form__header'>
                <h2 className='form__name'>{formName}</h2>
                <MyButton onClick={changeFormDisabled}>Редактировать</MyButton>
            </div>
            <fieldset
                className='form__field'vb
                disabled={formReadOnly}
            >
                <div className="form__inputs">
                    {inputs.map(input =>
                        <FormInput
                            key={input.id}
                            input={input}
                            register={register}
                            getFieldState={getFieldState}
                            formState={formState}
                        />
                    )}
                </div>
                <div className='form__sub-btn'>
                    <MyButton isSubmit={true}>Отправить</MyButton>
                </div>
            </fieldset>
        </form>
    );
};

export default MyForm;
