import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/Todo/HomePage/HomePage';
import SignUpForm from '../components/Todo/signUpForm/SignUpForm';
import LogInForm from '../components/Todo/LogInForm/LogInForm';
import MainPage from '../components/MainPage';
import withAuth from '../components/Todo/withAuth/withAuth'

const AuthenticatedComponent = withAuth(MainPage);

const FormRoutes = () => {
   return (
      <Routes>
         <Route path='/' element={<HomePage />} />
         <Route path='/signUp' element={<SignUpForm />} />
         <Route path='/logIn' element={<LogInForm />} />
         <Route path="/authenticated" element={<AuthenticatedComponent />} />
      </Routes>
   )
}
export default FormRoutes;