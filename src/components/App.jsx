import { useState } from 'react';
import TaskList from './Todo/TaskList';
import '../App.css';
import withLogger from './Todo/withLogger';
import AddTask from './Todo/AddTask';

const AddTaskListWithHOC = withLogger(AddTask);


const arr = [
  { id: 1, task: 'купить хлеб'},
  { id: 2, task: 'вычесать кота' },
  { id: 3, task: 'принять душ' }
];

function App() {
  //const [task, setTask] = useState('');
 // const [list, setList] = useState(arr);
  const [newTask, setNewTask] = useState('')


return (
  <>
    <div className='app container'>
      <h1>Get things done!</h1>
      
      <AddTaskListWithHOC  setNewTask={setNewTask} title={'Task add'}/>
     
      <TaskList    newTask={newTask} /> 
    </div>
  </>
)
}

export default App;

