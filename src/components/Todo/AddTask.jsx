import { Button, Input, ConfigProvider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../redux/actions/taskAction';
import { addNewTask } from '../../redux/actions/listAction';

const AddTask = ({ logger }) => {
  const dispatch = useDispatch();
  const {task} = useSelector(state => state.task);

  const handleClick = () => {
    if (!!task.trim()) {
      logger(task);
      dispatch(addNewTask({ task: task, id: crypto.randomUUID() }));
      dispatch(addTask(''))
    }
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && task.trim()) {
      logger(task);
      dispatch(addNewTask({ task: task, id: crypto.randomUUID() }));
      dispatch(addTask(''))
    }
  }

  return (
    <>
      <div className='input-with-button'>
        <Input placeholder="What is the task today?" value={task} onChange={(e) => dispatch(addTask(e.target.value))}
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