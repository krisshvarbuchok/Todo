import { Button, Input, ConfigProvider } from 'antd';
import styles from './addTask.module.css';
import { fetchCreateTask } from '../../../redux/slices/todoSlice';
import { useDispatch } from 'react-redux';



const AddTask = ({ logger, task, setTask }) => {


  const dispatch = useDispatch();

  const handleClick = () => {
    if (!!task.trim()) {
      logger(task);
      dispatch(fetchCreateTask({title: task}));
      setTask('')
    }
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && task.trim()) {
      logger(task);
      dispatch(fetchCreateTask({title: task}));
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