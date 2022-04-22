import React, {useEffect, useState} from 'react';
import './UserProfile.scss'
import {useParams} from "react-router-dom";
import UserService from "../../../API/UserService";
import {useFetching} from "../../../hooks/useFetching";
import Loader from "../../../components/UI/Loader/Loader";
import MyForm from "../../../components/UI/MyForm/MyForm";
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    name: yup
        .string()
        .min(4, 'Имя не может быть короче 4 символов')
        .max(16, 'Имя не может быть больше 14 символов')
        .required('Поле не может быть пустым'),
    username: yup
        .string()
        .min(4, 'Username не может быть короче 4 символов')
        .max(16, 'Username не может быть больше 14 символов')
        .required('Поле не может быть пустым'),
    email: yup
        .string()
        .email('Неверный формат почты')
        .required('Поле не может быть пустым'),
    address: yup.object().shape({
        street: yup
            .string()
            .matches(/^([^0-9]*)$/, 'Не должно быть цифр')
            .required('Поле не может быть пустым'),
        city: yup
            .string()
            .matches(/^([^0-9]*)$/, 'Не должно быть цифр')
            .required('Поле не может быть пустым'),
        zipcode: yup
            .string()
            .matches(/(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/, 'Неверный формат')
            .required('Поле не может быть пустым'),
    }),
    phone: yup
        .string()
        .required('Поле не может быть пустым'),
    website: yup
        .string()
        .matches(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/, 'Неверный формат')
        .required('Поле не может быть пустым'),
})



const UserProfile = () => {
    const [user, setUser] = useState({});
    const [formDisabled, setFormDisabled] = useState(true);
    const inputs = [
        {
            id: '1',
            name: 'name',
            type: 'text',
            label: 'Name',
            placeholder: '',
        },
        {
            id: '2',
            name: 'username',
            type: 'text',
            label: 'User Name',
            placeholder: '',
        },
        {
            id: '3',
            name: 'email',
            type: 'text',
            label: 'E-mail',
            placeholder: '',
        },
        {
            id: '4',
            name: 'address.street',
            type: 'text',
            label: 'Street',
            placeholder: '',
        },

        {
            id: '5',
            name: 'address.city',
            type: 'text',
            label: 'City',
            placeholder: '',
        },
        {
            id: '6',
            name: 'address.zipcode',
            type: 'text',
            label: 'Zip Code',
            placeholder: '',
        },
        {
            id: '7',
            name: 'phone',
            type: 'text',
            label: 'Phone',
            placeholder: '',
        },
        {
            id: '8',
            name: 'website',
            type: 'text',
            label: 'Web site',
            placeholder: '',
        },
        {
            id: '9',
            name: 'address.geo.lng',
            type: 'text',
            label: 'LNG',
            placeholder: '',
        },
    ];
    const params = useParams();

    const {register, handleSubmit, formState, reset, getFieldState} = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema)
    });



    const [userFetching, isUserLoading, userError] = useFetching(async (id) => {
        const response = await UserService.getUserById(id);
        setUser(response.data);
    })
    useEffect(() => {
        userFetching(params.id);
    }, [])

    useEffect(() => {
        reset(user);
    },[user])

    const onSubmit = (data) => {
        console.log(JSON.stringify(data, null, 2));
    }

    const changeFormDisable = (e) => {
        e.preventDefault();
        setFormDisabled(false)
    }

    return (
        <article className='user-form' >
            {isUserLoading
                ? <Loader/>
                : <MyForm
                    formDisabled={formDisabled}
                    changeFormDisable={changeFormDisable}
                    formName='Профиль пользователя'
                    inputs={inputs}
                    register={register}
                    handleSubmit={handleSubmit(onSubmit)}
                    getFieldState={getFieldState}
                    formState={formState}
                />
            }



        </article>
    );
};

export default UserProfile;
