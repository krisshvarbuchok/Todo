import '../App.css';
import { Routes, Route, Link } from 'react-router-dom';
import FormRoutes from '../routes/route';


function App() {


return (
  <>
    <FormRoutes />
      hello
    <Link to='/signUp'>Sing Up</Link>
    <Link to='/logIn'>Log In</Link>
    
  </>
)
}

export default App;

