import styles from './doneTask.module.css';
import isCompletedFunction from '../../../helper/isCompleted';

const DoneTask =({logger, id, handleClickDone, list, task})=> {

    return(
            <p className={styles.inputTask} onClick={() => handleClickDone(task,id, logger, list)}>
                {isCompletedFunction(list, id) ? <span className={styles.isCompleted}>{task}</span> : task}
            </p>
    )
}
export default DoneTask;

