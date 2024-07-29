import { Link } from 'react-router-dom';
import styles from './logOut.module.css';
function LogOut() {
    const clearStorage = () => {
        localStorage.clear(); 
    }
   
   return(
    <Link to='/logIn' className={styles.link} onClick={clearStorage}>Log out</Link>
   )
}
export default LogOut;