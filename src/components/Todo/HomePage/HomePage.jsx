import { Link } from 'react-router-dom';
import styles from './homePage.module.css';

const HomePage = () => {

    return (
        <>

            hello

            <nav>
                <Link to='/signUp' className={styles.link}>Sing Up</Link>
                <Link to='/authenticated'>Log In</Link>

            </nav>
        </>
    )
}
export default HomePage;