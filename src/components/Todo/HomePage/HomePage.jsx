import { Link } from 'react-router-dom';
import styles from './homePage.module.css';

const HomePage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <h1>Hello!</h1>
                <nav >
                    <div  className={styles.link}>
                        I've already had an accaunt <Link to='/authenticated' className={styles.link}>Log In</Link>
                    </div>
                    <div  className={styles.link}> 
                        I don't have any accaunt <Link to='/signUp' className={styles.link}>Sing Up</Link>
                    </div>
                    
                </nav>
            </div>
        </div>
    )
}
export default HomePage;