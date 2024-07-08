import { useState } from 'react';
import { Button, Input, Space } from 'antd';
import { QuestionOutlined } from '@ant-design/icons';

import '../App.css'
import TaskList from './Todo/TaskList';
const arr = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 40 }
];

function App() {
  const [task, setTask] = useState('');
  const [list, setList] = useState(arr);
  
  // const handleIconClick = ()=>{
  //   console.log('help');
  // }
  const handleClick = ()=>{
    if(!!task.trim()){
    setList((prevItems) => [...prevItems, {name:task, id: crypto.randomUUID()}])
    setTask('')
    }
  }
const handleKeyDown = (event)=>{
  if(event.key === 'Enter' && task.trim()){
    
    setList((prevItems) => [...prevItems, {name:task, id: crypto.randomUUID()}])
    setTask('')
    
  }
 
}


  return (
    <>
      <div className='app container'>
        <h1>Get things done!</h1>
        <p className='input-with-button'>
          <Input placeholder="What is the task today?" value={task} onChange={(e) =>setTask(e.target.value)} onKeyDown={handleKeyDown}/>
        
          <Button type="primary" className='button-add-task' onClick={handleClick}>Add task</Button>
 
          {/* <Button type="dashed" onClick={handleIconClick} icon={<QuestionOutlined />}></Button> */}
        </p>
        <TaskList list={list} setList={setList} />
      </div>
    </>
  )
}

export default App;

