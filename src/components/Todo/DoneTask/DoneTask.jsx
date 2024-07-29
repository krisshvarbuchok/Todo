import { Typography } from 'antd';
import styles from './doneTask.module.css';

const DoneTask =({logger, id, handleClickDone, doneTasks, task})=> {
    const { Text } = Typography;

    return(
        <>
            <p className={styles.inputTask} onClick={() => handleClickDone(task,id, logger)}>
                {doneTasks.includes(task) ? <Text delete>{task}</Text> : task}
            </p>
        </>
    )
}
export default DoneTask;