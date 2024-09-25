import { useState, useEffect, useRef } from 'react';
import DeleteTask from '../DeleteTask/DeleteTask';
import withLogger from '../withLogger/withLogger';
import EditTask from '../EditTask/EditTask';
import InputForEditTask from '../InputForEditTask/InputForEditTask';
import DoneTask from '../DoneTask/DoneTask';
import WillEditTask from '../WillEditTask/WillEditTask';
import styles from './taskList.module.css';
import isCompletedFunction from '../../../helper/isCompleted';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeleteTask } from '../../../redux/slices/todoSlice';
import { fetchEditIsCompleted } from '../../../redux/slices/todoSlice';
import { fetchEditTask } from '../../../redux/slices/todoSlice';

const DeleteTaskListWithHOC = withLogger(DeleteTask);
const EditTaskListWithHOC = withLogger(EditTask);
const InputForEditTaskListWithHOC = withLogger(InputForEditTask);
const DoneTaskListWithHOC = withLogger(DoneTask);
const WillEditTaskListWithHOC = withLogger(WillEditTask);


const TaskList = () => {
    const { data } = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const textInput = useRef(null);
    const [idEdit, setIdEdit] = useState(null);
    const [taskEdit, setTaskEdit] = useState(null);

    const handleEdit = (id, task, logger) => {
        logger(task);
        setIdEdit(id);
        setTaskEdit(task);
    }

    const handleClickDelete = (id, task, logger) => {
        logger(task);
        dispatch(fetchDeleteTask(id));
    }

    const handleClickDone = (task, id, logger) => {
        logger(task);
        dispatch(fetchEditIsCompleted({ id, boolean: { isCompleted: !isCompletedFunction(data, id) } }))
    }

    const handleSave = (id, task, logger) => {
        dispatch(fetchEditTask({id,  task: {title: task}}))
        logger(task);
        setIdEdit(null);
        setTaskEdit(null);
    }

    useEffect(() => {
        if (idEdit !== null && textInput.current) {
            textInput.current.focus();
        }
    }, [idEdit]);

    return (
        <>
            <ul>
                {console.log('p' , data)}
                
                {data.map((item) => {
                    return (<li key={item.id} className={styles.task}>
                        <div className={styles.inputTask}>
                            {idEdit === item.id ?
                                <InputForEditTaskListWithHOC textInput={textInput} taskEdit={taskEdit} setTaskEdit={setTaskEdit} handleSave={handleSave} id={item.id} task={taskEdit} title={'Task edit'} /> :
                                 <DoneTaskListWithHOC handleClickDone={handleClickDone} id={item.id} task={item.title} title={'Task done'} />
                            }
                        </div>
                        <div className={styles.buttonTask}>
                            {idEdit === item.id ?
                                <EditTaskListWithHOC handleSave={handleSave} id={item.id} task={taskEdit} title={'Task edit'} /> :
                                <WillEditTaskListWithHOC handleEdit={handleEdit} id={item.id} task={item.title} title={'Task will edit'} />
                            }
                            <DeleteTaskListWithHOC handleClickDelete={handleClickDelete} id={item.id} task={item.title} title={'Task delete'} />
                        </div>
                    </li>)
                })}
            </ul>
        </>
    )
}
export default TaskList;
