import { EditOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons';
import { Button, Typography  } from 'antd';
import { useState, useEffect } from 'react';

const TaskList =({list, setList}) =>{
    const { Text } = Typography;
    const [doneTasks, setDoneTasks] = useState([]);
    const [add, setAdd] = useState(false);
 
    
    
    const handleClick = () =>{
        console.log(list);
    }
    const handleClickAdd = (name) =>{
        console.log('edit task');
        
       
        
    }
    const handleClickDelete = (id) =>{
        console.log('delete task');
        setList(list.filter(task => task.id !== id));
    }
    const handleClickDone = (name) =>{
        setDoneTasks(prevState => prevState.includes(name) ? prevState.filter(task => task !== name) : [...prevState, name]);
        console.log(doneTasks);
    }
  

    useEffect(() => { console.log("componentDidUpdate") }, [list])

    // useEffect(() => {
    //     return () => console.log('componentWillUnmount')
    // }, [])

    return(
        <>
            <ul>
                {list.map((item) => {
                    return (<li key={item.id} >
                           
                            { doneTasks.includes(item.name) ? <p onClick={()=>handleClickDone(item.name)}><Text delete>{item.name}</Text></p> : <p onClick={()=>handleClickDone(item.name)}>{item.name}</p>}
                            
                            
                            <Button type="primary" ghost onClick={()=> handleClickAdd(item.name)}><EditOutlined /></Button>
                            {/* <Button type="primary" ghost onClick={()=>handleClickDone(item.name)}><CheckOutlined /></Button> */}
                            <Button type="primary" danger ghost onClick={() => handleClickDelete(item.id)}><DeleteOutlined /></Button>
                            
                        </li>)
                    
                })}
            </ul>
            <button onClick={handleClick}>clik</button>
        
        
        </>    
    )
}
export default TaskList;