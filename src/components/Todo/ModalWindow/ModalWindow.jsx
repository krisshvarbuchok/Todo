import { Link } from 'react-router-dom';

const ModalWindow = ({newUser}) =>{

    return(
        <>
        {newUser.message === undefined && newUser ? 
        <div>
            <p>Пользователь успешно зарегистрирован. Войдите в профиль:</p>
            <Link to='/logIn'>Log In</Link>
            </div> : newUser.message}
        <div></div>
        
        </>
    )
}
export default ModalWindow;