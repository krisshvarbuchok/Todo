import styles from './doneTask.module.css';
import isCompletedFunction from '../../../helper/isCompleted';
import { useSelector } from 'react-redux';

const DoneTask =({logger, id, handleClickDone, task})=> {
    const { data } = useSelector(state => state.todos);

    return(
            <p className={styles.inputTask} onClick={() => handleClickDone(task,id, logger, data)}>
                {isCompletedFunction(data, id) ? <span className={styles.isCompleted}>{task}</span> : task}
            </p>
    )
}
export default DoneTask;

