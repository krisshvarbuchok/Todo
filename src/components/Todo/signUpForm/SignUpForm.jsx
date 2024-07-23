import styles from './signUpForm.module.css';
import { useForm } from 'react-hook-form';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';

const SignUpForm = () =>{
    const [isModal, setIsModal] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data)=>{
        console.log(data);
        setIsModal(true);
    }

    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>username:</label>
            <input {...register('username', {
                required: 'Обязательное поле',
                pattern: {
                    value: /^[А-Яа-яЁёA-Za-z0-9]+$/,
                    message: 'неверное имя',
                }
            })} /> 
            <p>{errors.username?.message}</p>
            <label>email:</label>
            <input {...register('email', {
                required: 'Обязательное поле',
                pattern: {
                    value: /^[A-Za-z0-9-_.%+&]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                    message: 'Введите валидный email',
                }
            })} />
            <p>{errors.email?.message}</p>
            {/* <Link to="/mainPage"> */}
                <button type='submit'>Sign Up</button>
                
            {/* </Link> */}
            
        </form>
        {isModal? <ModalWindow /> : null }
        </>
    )

}
export default SignUpForm;