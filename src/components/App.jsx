import TaskList from './Todo/TaskList';
import { useState } from 'react';
import '../App.css';
import withLogger from './Todo/withLogger';
import AddTask from './Todo/AddTask';
import { useSelector } from 'react-redux';


const AddTaskListWithHOC = withLogger(AddTask);

function App() {
  //const {task} = useSelector(state => state.task);
  
return (
  <>
    <div className='app container'>
      <h1>Get things done!</h1>
      
      <AddTaskListWithHOC title={'Task add'}/>
     
      <TaskList /> 
    </div>
  </>
)
}

export default App;

