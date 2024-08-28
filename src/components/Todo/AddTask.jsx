import { Button, Input, ConfigProvider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
//import { addTask } from '../../redux/reducers/taskRTKReducer';
import { addTask } from '../../redux/slices/taskSlice';
import { taskText } from '../../redux/reducers/newTaskRTKReducer';

const AddTask = ({ logger}) => {
  const dispatch = useDispatch();
  const task = useSelector(state => state.newTaskRTKReducer);

  const handleClick = () => {
    if (!!task.trim()) {
      logger(task);
      dispatch(addTask(task));
      dispatch(taskText(''));
    }
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && task.trim()) {
      logger(task);
      dispatch(addTask(task));
      dispatch(taskText(''));
    }
  }

  return (
    <>
      <div className='input-with-button'>
        <Input placeholder="What is the task today?" value={task} onChange={(e) => dispatch(taskText(e.target.value))}
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