import { Typography } from 'antd';
import styles from './doneTask.module.css';

const DoneTask =({logger, id, handleClickDone, isCompleted, task})=> {
    const { Text } = Typography;

    return(
        <>
            <p className={styles.inputTask} onClick={() => handleClickDone(task,id, logger, isCompleted)}>
                {isCompleted ? <Text delete>{task}</Text> : task}
            </p>
        </>
    )
}
export default DoneTask;

