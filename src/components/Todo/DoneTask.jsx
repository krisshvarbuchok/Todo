import { Typography } from 'antd';

const DoneTask =({logger, id, handleClickDone, doneTasks, task})=> {
    const { Text } = Typography;

    return(
        <>
            <p className='input-task' onClick={() => handleClickDone(task,id, logger)}>
                {doneTasks.includes(task) ? <Text delete>{task}</Text> : task}
            </p>
        </>
    )
}
export default DoneTask;