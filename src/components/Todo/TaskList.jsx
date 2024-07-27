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
            setDoneTasks(prevState => prevState.includes(task) ? prevState.filter(item => item !== task) : [...prevState, task]);
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
    const handleClickDone = (task,id, logger) => {
        logger(task);
        editIsComplitedAPI(id, task, doneTasks.includes(task))
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
                    return (<li key={item.id} className='task'>

                        <div className='input-task'>
                            {idEdit === item.id ?
                                <InputForEditTaskListWithHOC textInput={textInput} taskEdit={taskEdit} setTaskEdit={setTaskEdit} handleSave={handleSave}  id={item.id} task={taskEdit} title={'Task edit'}/> :

                                <DoneTaskListWithHOC handleClickDone={handleClickDone} id={item.id} doneTasks={doneTasks} task={item.title} title={'Task done'}/>
                            }
                        </div>
                        <div className='button-task'>
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
