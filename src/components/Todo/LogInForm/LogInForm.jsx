import { useForm } from 'react-hook-form';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './logInForm.module.css';
import api from '../../../API/api';


const LogInForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    
  const authorization = async (obj) => {
    try {
      const response = await api.post('/auth/login', obj);
      //console.log( response.data);
      console.log(response);
            localStorage.setItem('token', response.data.token);
           console.log('захожу', response.data.token);
            navigate('/authenticated');
    } catch (error) {
      console.error('Ошибка при авторизации:',error.message);
      
    }
  }




    const onSubmit = (data) => {
        console.log(data);
        authorization(data);
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.container} >
                    <label className={styles.text}>email:</label>
                    <div>
                        <input className={styles.input} {...register('email', {
                            required: 'Обязательное поле',
                            pattern: {
                                value: /^[A-Za-z0-9-_.%+&]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                                message: 'Введите валидный email',
                            }
                        })} />
                        <p className={styles.warning}>{errors.email?.message}</p>
                    </div>
                </div>
                <div className={styles.container} >
                    <label className={styles.text}>password:</label>
                    <div>
                        <input type="password" className={styles.input} {...register('password', {
                            required: 'Обязательное поле',
                        })} />
                        <p className={styles.warning}>{errors.password?.message}</p>
                    </div>
                </div>

                <button type='submit' className={styles.button}>Log In</button>

            </form>
            <div className={styles.sign}>
                Don't have an account? <Link className={styles.sign} to='/signUp'>Sign Up</Link>!
            </div>
        </>
    )
}
export default LogInForm;