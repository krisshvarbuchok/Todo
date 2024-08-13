import styles from './withAuth.module.css';
import { Link } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
  return (props) => {

    const isAuthenticated = localStorage.getItem('token');
    if (isAuthenticated !== undefined) {
      console.log(isAuthenticated);
      return <WrappedComponent {...props} />;
    } else {
      return <div>
        <p className={styles.warning}>Please log in to access this content <br />
          <Link to='/logIn' className={styles.link}>Log In</Link></p>
      </div>
    }
  };
};

export default withAuth;