import { Routes, Route } from 'react-router-dom';
import SignUpForm from '../components/Todo/signUpForm/SignUpForm';
import LogInForm from '../components/Todo/LogInForm/LogInForm';
import MainPage from '../components/MainPage';


const FormRoutes = () => {
   return(
     <Routes>
        <Route path='/signUp' element={<SignUpForm />} />
        <Route path='/logIn' element={<LogInForm />} />
        <Route path='/mainPage' element={<MainPage />} />

    </Routes>
   )
}
export default FormRoutes;