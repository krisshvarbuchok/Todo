import { useState } from 'react';
import { Button, Input } from 'antd';
// import { QuestionOutlined } from '@ant-design/icons';
import TaskList from './Todo/TaskList';
import '../App.css';
import withLogger from './Todo/withLogger';

const AddTaskListWithHOC = withLogger(TaskList);
const EditTaskListWithHOC = withLogger(TaskList);
const DeleteTaskListWithHOC = withLogger(TaskList);
const DoneTaskListWithHoc = withLogger(TaskList);


const arr = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 40 }
];

function App() {
  const [task, setTask] = useState('');
  const [list, setList] = useState(arr);
  const [newTask, setNewTask] = useState('')
  const [doneTaskLogger, setDoneTaskLogger] = useState('')
  const [deleteTaskLogger, setDeleteTaskLogger] = useState('');
  const [editTaskLogger, setEditTaskLogger] = useState('');
  
  // const handleIconClick = ()=>{
  //   console.log('help');
  // }
  const handleClick = ()=>{
    if(!!task.trim()){
      setNewTask(task);
      setList((prevItems) => [...prevItems, {name:task, id: crypto.randomUUID()}])
      setTask('')
    }
  }
const handleKeyDown = (event)=>{
  if(event.key === 'Enter' && task.trim()){
    setNewTask(task);
    setList((prevItems) => [...prevItems, {name:task, id: crypto.randomUUID()}])
    setTask('')
    
  }
 
}


  return (
    <>
      <div className='app container'>
        <h1>Get things done!</h1>
        <div className='input-with-button'>
          <Input placeholder="What is the task today?" value={task} onChange={(e) =>setTask(e.target.value)} onKeyDown={handleKeyDown}/>
        
          <Button type="primary" className='button-add-task' onClick={handleClick}>Add task</Button>
 
          {/* <Button type="dashed" onClick={handleIconClick} icon={<QuestionOutlined />}></Button> */}
        </div>
        <AddTaskListWithHOC list={list} setList={setList} newTask={newTask} title={'Task added'}/>
        <EditTaskListWithHOC setEditTaskLogger={setEditTaskLogger}  editTaskLogger={editTaskLogger} list={list} setList={setList} title={'Task edited'} /> 
        <DeleteTaskListWithHOC deleteTaskLogger={deleteTaskLogger} list={list} setList={setList} setDeleteTaskLogger={setDeleteTaskLogger}  title={'Task delete'} />
        {/* <TaskListWithHOC list={list} setList={setList}  newTask={newTask}/> */}
        <DoneTaskListWithHoc doneTaskLogger={doneTaskLogger} setDoneTaskLogger={setDoneTaskLogger} list={list} setList={setList} title={'Task done'}/>
      </div>
    </>
  )
}

export default App;

