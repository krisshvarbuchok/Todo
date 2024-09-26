import { Typography } from 'antd';
import { useSelector } from 'react-redux';

const DoneTask = ({ logger, handleClickDone, id, task }) => {
    const { Text } = Typography;
    const done = useSelector(state => state.doneRTKReducer);

    return (
        <p className='input-task' onClick={() => handleClickDone(id, task, logger)}>
            {done.includes(id) ? <Text delete>{task}</Text> : task}
        </p>
    )
}
export default DoneTask;