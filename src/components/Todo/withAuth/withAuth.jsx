
const withAuth = (WrappedComponent) => {
    return (props) => {

      const isAuthenticated =  localStorage.getItem('token');
      if (typeof isAuthenticated === 'string') {
        return <WrappedComponent {...props} />;
      } else {
        return <p>Please log in to access this content.</p>;
      }
    };
  };
  
export default withAuth;