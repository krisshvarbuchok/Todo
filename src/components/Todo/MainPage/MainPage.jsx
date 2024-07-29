import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TaskList from '../TaskList/TaskList';
import '../../../App.css';
import withLogger from '../withLogger/withLogger';
import AddTask from '../AddTask/AddTask';
import LogOut from '../LogOut/LogOut';
import styles from './mainPage.module.css';
//import FormRoutes from '../routes/FormRoutes';

const AddTaskListWithHOC = withLogger(AddTask);


// const arr = [
//   { id: 1, task: 'купить хлеб'},
//   { id: 2, task: 'вычесать кота' },
//   { id: 3, task: 'принять душ' }
// ];

const MainPage = () => {


  const [task, setTask] = useState('');
  const [list, setList] = useState([]);
  const [newTask, setNewTask] = useState('')

  useEffect(() => {
    async function getTasks() {
      try {
        const response = await fetch('https://todo-redev.herokuapp.com/api/todos', {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data = await response.json();
        setList(data)

      }
      catch (error) {
        console.log('error', error.message);
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


          {/* <Link to='/logIn'>Log out</Link> */}
        </div>
      </div>
      <LogOut />
    </>
  )
}

export default MainPage;