import { useEffect, useRef } from 'react';
import DeleteTask from './DeleteTask';
import withLogger from './withLogger';
import EditTask from './EditTask';
import InputForEditTask from './InputForEditTask';
import DoneTask from './DoneTask';
import WillEditTask from './WillEditTask';
import { useDispatch, useSelector } from 'react-redux';
//import { deleteTask } from '../../redux/reducers/taskRTKReducer';
import { deleteTask } from '../../redux/slices/taskSlice';
import { doneTask } from '../../redux/reducers/doneRTKReducer';
import { editIdTask } from '../../redux/reducers/editIdRTKReducer';
import { editTask } from '../../redux/reducers/editTaskRTKReducer';
//import { addEditedTask } from '../../redux/reducers/taskRTKReducer';
import { addEditedTask } from '../../redux/slices/taskSlice';



const DeleteTaskListWithHOC = withLogger(DeleteTask);
const EditTaskListWithHOC = withLogger(EditTask);
const InputForEditTaskListWithHOC = withLogger(InputForEditTask);
const DoneTaskListWithHOC = withLogger(DoneTask);
const WillEditTaskListWithHOC = withLogger(WillEditTask);


const TaskList = () => {
    //const list = useSelector(state => state.taskRTKReducer);
    const list = useSelector(state => state.taskSlice);
    const editId = useSelector(state => state.editIdRTKReducer);
    const edit = useSelector(state => state.editTaskRTKReducer);
    const dispatch = useDispatch();
    const textInput = useRef(null);


    useEffect(() => {
        if (editId !== null && textInput.current) {
            textInput.current.focus();
        }
    }, [editId]);

    const handleClickDelete = (id, task, logger) => {
        logger(task);
        dispatch(deleteTask(id));
    }

    const handleClickDone = (task, logger) => {
        logger(task);
        dispatch(doneTask(task));
    }
    const handleEdit = (id, task, logger) => {
        logger(task);
        dispatch(editIdTask(id));
        dispatch(editTask(task));
    }


    const handleSave = (task, logger) => {
        dispatch(addEditedTask({ id: editId, task }));
        logger(task);
        dispatch(editIdTask(null));
        dispatch(editTask(null));
    }


    return (
        <>
            <ul>

                {list.map((item) => {
                    return (<li key={item.id} className='task'>
                        <div className='input-task'>
                            {editId === item.id ?
                                <InputForEditTaskListWithHOC textInput={textInput} handleSave={handleSave} id={item.id} task={edit} title={'Task edit'} /> :

                                <DoneTaskListWithHOC handleClickDone={handleClickDone} task={item.task} title={'Task done'} />
                            }
                        </div>
                        <div className='button-task'>
                            {editId === item.id ?
                                <EditTaskListWithHOC handleSave={handleSave} id={item.id} task={edit} title={'Task edit'} /> : 
                                <WillEditTaskListWithHOC handleEdit={handleEdit} id={item.id} task={item.task} title={'Task will edit'} />
                            }

                            <DeleteTaskListWithHOC handleClickDelete={handleClickDelete} id={item.id} task={item.task} title={'Task delete'} />
                        </div>
                    </li>)
                })}
            </ul>
        </>
    )
}
export default TaskList;
