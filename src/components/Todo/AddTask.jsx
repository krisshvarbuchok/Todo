import { Button, Input, ConfigProvider } from 'antd';

const AddTask = ({ logger, task, setTask, setList, setNewTask }) => {
  const handleClick = () => {
    if (!!task.trim()) {
      setNewTask(task);
      logger(task);
      setList((prevItems) => [...prevItems, { task: task, id: crypto.randomUUID() }])
      setTask('')
    }
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && task.trim()) {
      setNewTask(task);
      logger(task);
      setList((prevItems) => [...prevItems, { task: task, id: crypto.randomUUID() }])
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