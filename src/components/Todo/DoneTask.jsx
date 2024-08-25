import { Typography } from 'antd';
import { useSelector } from 'react-redux';

const DoneTask =({logger, handleClickDone, task})=> {
    const { Text } = Typography;
    const done = useSelector(state => state.doneRTKReducer);

    return(
        <>
            <p className='input-task' onClick={() => handleClickDone(task, logger)}>
                {done.includes(task) ? <Text delete>{task}</Text> : task}
            </p>
        </>
    )
}
export default DoneTask;