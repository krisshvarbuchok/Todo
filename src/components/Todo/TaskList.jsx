import { useState, useEffect, useRef } from 'react';
import DeleteTask from './DeleteTask';
import withLogger from './withLogger';
import EditTask from './EditTask';
import InputForEditTask from './InputForEditTask';
import DoneTask from './DoneTask';
import WillEditTask from './WillEditTask';


const DeleteTaskListWithHOC = withLogger(DeleteTask);
const EditTaskListWithHOC = withLogger(EditTask);
const InputForEditTaskListWithHOC = withLogger(InputForEditTask);
const DoneTaskListWithHOC = withLogger(DoneTask);
const WillEditTaskListWithHOC = withLogger(WillEditTask);


const TaskList = ({ list, setList}) => {

    const textInput = useRef(null);
    const [doneTasks, setDoneTasks] = useState([]);
    const [idEdit, setIdEdit] = useState(null);
    const [taskEdit, setTaskEdit] = useState(null);
  
    const handleEdit = (id, task, logger) => {
        logger(task);
        setIdEdit(id);
        setTaskEdit(task);
    }

    const handleClickDelete = (id, task, logger) => {
        logger(task);
        setList(list.filter(task => task.id !== id));
    }
    const handleClickDone = (task, logger) => {
        logger(task);
        setDoneTasks(prevState => prevState.includes(task) ? prevState.filter(item => item !== task) : [...prevState, task]);
    }

    const handleSave = (id, task, logger) => {
        setList(list.map(item => item.id === id ? { ...item, task: taskEdit } : item));
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

                {list.map((item) => {
                    return (<li key={item.id} className='task'>

                        <div className='input-task'>
                            {idEdit === item.id ?
                                <InputForEditTaskListWithHOC textInput={textInput} taskEdit={taskEdit} setTaskEdit={setTaskEdit} handleSave={handleSave}  id={item.id} task={taskEdit} title={'Task edit'}/> :

                                <DoneTaskListWithHOC handleClickDone={handleClickDone} doneTasks={doneTasks} task={item.task} title={'Task done'}/>
                            }
                        </div>
                        <div className='button-task'>
                            {idEdit === item.id ?
                                <EditTaskListWithHOC handleSave={handleSave}  id={item.id} task={taskEdit} title={'Task edit'}/> :
                                <WillEditTaskListWithHOC handleEdit={handleEdit} id={item.id}  task={item.task} title={'Task will edit'}/>
                            }

                            <DeleteTaskListWithHOC handleClickDelete={handleClickDelete}  id={item.id} task={item.task} title={'Task delete'}/>
                        </div>

                    </li>)

                })}

            </ul>
           


        </>
    )
}
export default TaskList;
