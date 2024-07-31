import { Button, Input, ConfigProvider } from 'antd';
import styles from './addTask.module.css';
import api from '../../../API/api';



const AddTask = ({ logger, task, setTask, setList, setNewTask }) => {


  const createTask = async (newTask) => {
    try {
      const response = await api.post('/todos', newTask);
      console.log('Задача успешно создана:', response.data);
      setList((prevItems) => [...prevItems, response.data])
    } catch (error) {
      console.error('Ошибка при создании задачи:', error);
    }
  }

  const handleClick = () => {
    if (!!task.trim()) {
      setNewTask(task);
      logger(task);
      createTask({title: task});
      setTask('')
    }
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && task.trim()) {
      setNewTask(task);
      logger(task);
      createTask({title: task});
      setTask('')
    }
  }

  return (
    <div className={styles.inputWithButton}>
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
        <Button type="primary" className={styles.buttonAddTask} onClick={handleClick}>Add task</Button>
      </ConfigProvider>
    </div>
  )
}
export default AddTask;