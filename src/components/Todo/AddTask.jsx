import { Button, Input, ConfigProvider } from 'antd';

const AddTask = ({ logger, task, setTask, setList, setNewTask }) => {

  async function createTask (str){
    try{
      const response = await fetch('https://todo-redev.herokuapp.com/api/todos',{
        method: 'POST',
        headers:{
          'accept': 'application/json',
           Authorization: `Bearer ${ localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          "title": str
        })
      });
      const data = await response.json();
        console.log('создана задача ', data);
        setList((prevItems) => [...prevItems, data])
        //return data;
    }
    catch(error){
      console.log('error', error.message);
    }
  }

  const handleClick =  () => {
    if (!!task.trim()) {
      setNewTask(task);
      logger(task);
      createTask(task);
     // setList((prevItems) => [...prevItems, { title: task}])
      setTask('')
    }
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && task.trim()) {
      setNewTask(task);
      logger(task);
      createTask(task);
      //setList((prevItems) => [...prevItems, { title: task }])
      setTask('')
    }
  }

  return (
    <>
      <div className='input-with-button'>
        <Input placeholder="What is the task today?" value={task} onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown} />
        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorPrimaryActive: '#b37feb',
                colorPrimaryHover: '#722ed1',
              },
            },
          }}
        >
          <Button type="primary" className='button-add-task' onClick={handleClick}>Add task</Button>
        </ConfigProvider>
      </div>
    </>
  )
}
export default AddTask;