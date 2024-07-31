import { useState, useEffect, useRef } from 'react';
import DeleteTask from '../DeleteTask/DeleteTask';
import withLogger from '../withLogger/withLogger';
import EditTask from '../EditTask/EditTask';
import InputForEditTask from '../InputForEditTask/InputForEditTask';
import DoneTask from '../DoneTask/DoneTask';
import WillEditTask from '../WillEditTask/WillEditTask';
import styles from './taskList.module.css';
import api from '../../../API/api';



const DeleteTaskListWithHOC = withLogger(DeleteTask);
const EditTaskListWithHOC = withLogger(EditTask);
const InputForEditTaskListWithHOC = withLogger(InputForEditTask);
const DoneTaskListWithHOC = withLogger(DoneTask);
const WillEditTaskListWithHOC = withLogger(WillEditTask);


const TaskList = ({ list, setList }) => {

    const textInput = useRef(null);
    const [idEdit, setIdEdit] = useState(null);
    const [taskEdit, setTaskEdit] = useState(null);

    const deleteTaskAPI = async(id) => {
        try{
            const response = await api.delete(`/todos/${id}`);
            console.log('Задача удалена:', response.data);
            setList(list.filter(task => task.id !== id));
        }
        catch (error){
            console.error('Ошибка при удалении задачи:', error);
        }
    }



    const editTaskAPI = async(id, editTask) => {
        try{
            const response = await api.patch(`/todos/${id}`, editTask);
            console.log('Задача изменена:', response.data);
            setList(list.map(item => item.id === id ? { ...item, title: taskEdit } : item));
        }
        catch (error){
            console.error('Ошибка при удалении задачи:', error);
        }
    }


    const editIsComplitedAPI = async(id, boolean) => {
        try{
            const response = await api.patch(`/todos/${id}/isCompleted`, boolean);
            console.log('сделано/ не сделано:', response.data);
            setList(list.map(item => item.id === id ? {...item, isCompleted: boolean.isCompleted} : item));
        }
        catch (error){
            console.error('Ошибка при удалении задачи:', error);
        }
    }



    const handleEdit = (id, task, logger) => {
        logger(task);
        setIdEdit(id);
        setTaskEdit(task);
    }

    const handleClickDelete = (id, task, logger) => {
        logger(task);
        deleteTaskAPI(id)
        //setList(list.filter(task => task.id !== id));
    }
    const handleClickDone = (task, id, logger) => {
        console.log( list);
        logger(task);
        editIsComplitedAPI(id, {isCompleted: !(list.find(item => item.id === id && item.isCompleted ))})
    }

    const handleSave = (id, task, logger) => {
        //setList(list.map(item => item.id === id ? { ...item, title: task } : item));
        editTaskAPI(id,  {title: task});
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
                    return (<li key={item.id} className={styles.task}>

                        <div className={styles.inputTask}>
                            {idEdit === item.id ?
                                <InputForEditTaskListWithHOC textInput={textInput} taskEdit={taskEdit} setTaskEdit={setTaskEdit} handleSave={handleSave} id={item.id} task={taskEdit} title={'Task edit'} /> :

                                <DoneTaskListWithHOC handleClickDone={handleClickDone} list={list} id={item.id} task={item.title} title={'Task done'} />
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
