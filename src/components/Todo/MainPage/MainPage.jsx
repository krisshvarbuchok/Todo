import { useEffect, useState } from 'react';
import TaskList from '../TaskList/TaskList';
import '../../../App.css';
import withLogger from '../withLogger/withLogger';
import AddTask from '../AddTask/AddTask';
import LogOut from '../LogOut/LogOut';
import styles from './mainPage.module.css';
import api from '../../../API/api';
//import FormRoutes from '../routes/FormRoutes';




const AddTaskListWithHOC = withLogger(AddTask);

const MainPage = () => {


  const [task, setTask] = useState('');
  const [list, setList] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await api.get('/todos');
        setList(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    }
    getTasks()
  }, []
  )



  return (
    <>
      <div className={styles.app}>
        <div className='app container'>
          <h1>Get things done!</h1>

          <AddTaskListWithHOC task={task} setTask={setTask} list={list} setList={setList} setNewTask={setNewTask} title={'Task add'} />

          <TaskList list={list} setList={setList} newTask={newTask} />

        </div>
      </div>
      <LogOut />
    </>
  )
}

export default MainPage;