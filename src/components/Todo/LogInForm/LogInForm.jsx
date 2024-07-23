import { useForm } from 'react-hook-form';
import { Routes, Route, Link } from 'react-router-dom';



const LogInForm = () =>{
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data)=>{
        console.log(data);
    }
    return(
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
            <Link to="/mainPage">
                <button type='submit'>Log In</button>
                
            </Link>
        </form>
    )
}
export default LogInForm;