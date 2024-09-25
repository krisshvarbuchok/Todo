import { useEffect, useState } from 'react';
import TaskList from '../TaskList/TaskList';
import '../../../App.css';
import withLogger from '../withLogger/withLogger';
import AddTask from '../AddTask/AddTask';
import LogOut from '../LogOut/LogOut';
import styles from './mainPage.module.css';
import api from '../../../API/api';
//import FormRoutes from '../routes/FormRoutes';
import { fetchGetTodos } from '../../../redux/slices/todoSlice';
import { useDispatch, useSelector } from 'react-redux';



const AddTaskListWithHOC = withLogger(AddTask);

const MainPage = () => {

  const dispatch = useDispatch();
  const { status, data } = useSelector(state => state.todos);
  const [task, setTask] = useState('');
  //const [list, setList] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    dispatch (fetchGetTodos())
  }, [dispatch]
  )



  return (
    <>
      <div className={styles.app}>
        <div className='app container'>
          <h1>Get things done!</h1>

          <AddTaskListWithHOC task={task} setTask={setTask} setNewTask={setNewTask} title={'Task add'} />
          {status === 'loading' && <p>Загрузка...</p>}
          {status === 'failed' && (
        <p>
          Ошибка. Что-то пошло не так (Скорей всего не добавил токен в .env)
        </p>
      )}
      {status === 'succeeded' &&
        data && 
          <TaskList />}
{/* {console.log(status)} */}

        </div>
      </div>
      <LogOut />
    </>
  )
}

export default MainPage;