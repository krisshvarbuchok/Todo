import { Button, Input, ConfigProvider } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../redux/reducers/taskRTKReducer';

const AddTask = ({ logger}) => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();
  //const {task} = useSelector(state => state.task);

  const handleClick = () => {
    if (!!taskText.trim()) {
      //logger(task);
      dispatch(addTask(taskText));
      setTaskText('')
     // dispatch(addTask(''))
    }
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && taskText.trim()) {
      //logger(task);
      dispatch(addTask(taskText));
      setTaskText('')
     // dispatch(addTask(''))
    }
  }

  return (
    <>
      <div className='input-with-button'>
        <Input placeholder="What is the task today?" value={taskText} onChange={(e) => setTaskText(e.target.value)}
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