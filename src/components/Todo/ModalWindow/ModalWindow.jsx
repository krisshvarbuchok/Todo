import { Link } from 'react-router-dom';
import styles from './modalWindow.module.css';

const ModalWindow = ({ newUser }) => {

    return (
        <>
            {newUser.message === undefined && newUser ? (
                <div className={styles.modalBackground}>
                    <div className={styles.container}>
                        <div className={styles.link}>
                            Пользователь {newUser.username} успешно зарегистрирован. Войдите в профиль:
                            <Link to='/logIn' className={styles.link}>Log In</Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.errorMessage}>
                    {newUser.message}
                </div>
            )}
        </>
    )
}
export default ModalWindow;