import styles from './doneTask.module.css';

const DoneTask =({logger, id, handleClickDone, list, task})=> {

    return(
            <p className={styles.inputTask} onClick={() => handleClickDone(task,id, logger, list)}>
                {list.find(item => item.id === id && item.isCompleted) ? <span className={styles.isCompleted}>{task}</span> : task}
            </p>
    )
}
export default DoneTask;

