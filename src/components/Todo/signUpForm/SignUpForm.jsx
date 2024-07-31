import styles from './signUpForm.module.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useState, lazy, Suspense } from 'react';
const ModalWindow = lazy(() => import('../ModalWindow/ModalWindow'));

const SignUpForm = () => {
    const [newUser, setNewUser] = useState('');
    const [isModal, setIsModal] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();


    async function registration(newUser) {
        try {
            const response = await fetch('https://todo-redev.herokuapp.com/api/users/register', {
                method: "POST",
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });
            const data = await response.json();
            // console.log(data);
            setNewUser(data);
        } catch (error) {
            console.log("error: ", error.message);
        }
    }


    const onSubmit = (data) => {
        registration(data);
        //console.log(data);
        setIsModal(true);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.container} >
                    <label className={styles.text}>username:</label>
                    <div>
                        <input className={styles.input} {...register('username', {
                            required: 'Обязательное поле',
                            pattern: {
                                value: /^[А-Яа-яЁёA-Za-z0-9]+$/,
                                message: 'неверное имя',
                            }
                        })} />
                        <p className={styles.warning}>{errors.username?.message}</p>
                    </div>
                </div>
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
                        <input className={styles.input} {...register('password', {
                            required: 'Обязательное поле',
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message: 'Минимум 1 заглавная буква, 1 прописная, 1 число и 1 символ',
                            },
                            minLength: {
                                value: 8,
                                message: 'Пароль должен быть длиной не менее 8 символов'
                            }
                        })} />
                        <p className={styles.warning}>{errors.password?.message}</p>
                    </div>
                </div>
                <div className={styles.container} >
                    <label className={styles.text}>gender</label>
                    <div>
                        <label className={styles.radio}>
                            <input
                                type='radio'
                                {...register('gender', {
                                    required: 'выберите пол',
                                })}
                                value='female' />
                            Female
                        </label>
                        <label className={styles.radio}>
                            <input
                                type='radio'
                                {...register('gender', {
                                    required: 'выберите пол',
                                })}
                                value='male' />
                            Male
                        </label>
                    </div>
                </div>
                <div className={styles.container} >
                    <label className={styles.text}>age:</label>
                    <div>
                        <input className={styles.input} {...register('age', {
                            required: 'Обязательное поле',
                            pattern: {
                                value: /^\d+$/,
                                message: 'Введите целое число от 10 до 100',
                            }
                        })} />
                        <p className={styles.warning}>{errors.age?.message}</p>
                    </div>
                </div>

                <button type='submit' className={styles.button}>Sign Up</button>


            </form>
            {isModal ?
                <Suspense fallback={<div>...Loading...</div>}>
                    <ModalWindow newUser={newUser} />
                </Suspense> :
                null}
            <div className={styles.log}>
                Already have an account? <Link className={styles.log} to='/logIn'>Log In</Link>!
            </div>
        </>
    )
}
export default SignUpForm;