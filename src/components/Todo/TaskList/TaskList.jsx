import { useState, useEffect, useRef } from 'react';
import DeleteTask from '../DeleteTask/DeleteTask';
import withLogger from '../withLogger/withLogger';
import EditTask from '../EditTask/EditTask';
import InputForEditTask from '../InputForEditTask/InputForEditTask';
import DoneTask from '../DoneTask/DoneTask';
import WillEditTask from '../WillEditTask/WillEditTask';
import styles from './taskList.module.css';



const DeleteTaskListWithHOC = withLogger(DeleteTask);
const EditTaskListWithHOC = withLogger(EditTask);
const InputForEditTaskListWithHOC = withLogger(InputForEditTask);
const DoneTaskListWithHOC = withLogger(DoneTask);
const WillEditTaskListWithHOC = withLogger(WillEditTask);


const TaskList = ({ list, setList}) => {

    const textInput = useRef(null);
    const [isCompleted, setIsCompleted] = useState(list.map(item => ({ id: item.id, isCompleted: item.isCompleted })));
    const [idEdit, setIdEdit] = useState(null);
    const [taskEdit, setTaskEdit] = useState(null);
    
    async function deleteTaskAPI (id){
        try{
            const response = await fetch(`https://todo-redev.herokuapp.com/api/todos/${id}`, {
                method: 'DELETE',
                headers:{
                    'accept': 'application/json',
                     Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await response.json();
            console.log('удалено', data);
            setList(list.filter(task => task.id !== id));
        }
        catch (error){
            console.log('error', error.message);
        }
    }

    async function editTaskAPI (str, id) {
        try{
            const response = await fetch(`https://todo-redev.herokuapp.com/api/todos/${id}`, {
                method: 'PATCH',
                headers:{
                    accept: 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "title": str
                })
            });
            const data = await response.json();
            setList(list.map(item => item.id === id ? { ...item, title: taskEdit } : item));
            console.log('изменено на ', data);
        }catch(error) {
            console.log("error: ", error);
        } 
      }

      async function editIsComplitedAPI(id,task, boolean){
        try{
            const response = await fetch(`https://todo-redev.herokuapp.com/api/todos/${id}/isCompleted`, {
                method: 'PATCH',
                headers:{
                    accept: 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    "title": boolean
                })
            });
            const data = await response.json();
            console.log(boolean);
            setIsCompleted(prevState => prevState.map(item => item.id === id ? { ...item, isCompleted: !boolean } : item));
            console.log('сделано/ не сделано', data);
        }catch(error) {
            console.log("error: ", error);
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
    const handleClickDone = (task,id, logger, isCompleted) => {
        console.log(isCompleted);
        logger(task);
        //setIsCompteted(!isCompletedTask)
        editIsComplitedAPI(id, task, !isCompleted)
        //setDoneTasks(prevState => prevState.includes(task) ? prevState.filter(item => item !== task) : [...prevState, task]);
    }

    const handleSave = (id, task, logger) => {
        //setList(list.map(item => item.id === id ? { ...item, title: task } : item));
        editTaskAPI(task, id);
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
                    const taskStatus = isCompleted.find(task => task.id === item.id)?.isCompleted;
                    return (<li key={item.id} className={styles.task}>

                        <div className={styles.inputTask}>
                            {idEdit === item.id ?
                                <InputForEditTaskListWithHOC textInput={textInput} taskEdit={taskEdit} setTaskEdit={setTaskEdit} handleSave={handleSave}  id={item.id} task={taskEdit} title={'Task edit'}/> :

                                <DoneTaskListWithHOC handleClickDone={handleClickDone} id={item.id} isCompleted={taskStatus} task={item.title} title={'Task done'}/>
                            }
                        </div>
                        <div className={styles.buttonTask}>
                            {idEdit === item.id ?
                                <EditTaskListWithHOC handleSave={handleSave}  id={item.id} task={taskEdit} title={'Task edit'}/> :
                                <WillEditTaskListWithHOC handleEdit={handleEdit} id={item.id}  task={item.title} title={'Task will edit'}/>
                            }

                            <DeleteTaskListWithHOC handleClickDelete={handleClickDelete}  id={item.id} task={item.title} title={'Task delete'}/>
                        </div>

                    </li>)

                })}
                
            </ul>


        </>
    )
}
export default TaskList;
