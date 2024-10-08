import { useForm } from 'react-hook-form';
import {  Link, useNavigate } from 'react-router-dom';
import styles from './logInForm.module.css';
import { fetchAuthorization } from '../../../redux/slices/todoSlice';
import { useDispatch } from 'react-redux';


const LogInForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        
        console.log(data);
        dispatch(fetchAuthorization(data))
            .unwrap()  // Дожидаемся окончания действия
            .then(() => {
                navigate('/authenticated');  // Редирект после успешной авторизации
            })
            .catch((error) => {
                console.error('Ошибка авторизации:', error);
            });
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