import { EditOutlined, DeleteOutlined, SaveOutlined } from '@ant-design/icons';
import { Button, Typography, Input, Popconfirm } from 'antd';
import { useState, useEffect, useRef } from 'react';

const TaskList = ({ list, setList }) => {
    const { Text } = Typography;
    const textInput = useRef(null);
    const [doneTasks, setDoneTasks] = useState([]);
    const [idEdit, setIdEdit] = useState(null);
    const [nameEdit, setNameEdit] = useState(null);



    // const handleClick = () => {
    //     console.log(list);
    // }

    const handleEdit = (id, name) => {
        setIdEdit(id);
        setNameEdit(name);
    }

    const handleClickDelete = (id) => {
        console.log('delete task');
        setList(list.filter(task => task.id !== id));
    }
    const handleClickDone = (name) => {
        setDoneTasks(prevState => prevState.includes(name) ? prevState.filter(task => task !== name) : [...prevState, name]);

    }
    const handleSave = (id) => {
        setList(list.map(task => task.id === id ? { ...task, name: nameEdit } : task));
        setIdEdit(null);
        setNameEdit(null);
    }


    // useEffect(() => { console.log("componentDidUpdate") }, [list])


    useEffect(() => {
        if (idEdit !== null && textInput.current) {
            textInput.current.focus();
        }
    }, [idEdit]);

    // useEffect(() => {
    //     return () => console.log('componentWillUnmount')
    // }, [])

    return (
        <>
            <ul>

                {list.map((item) => {
                    return (<li key={item.id} className='task'>

                        <p className='input-task'>
                            {idEdit === item.id ?
                                <Input ref={textInput} value={nameEdit} onChange={(e) => setNameEdit(e.target.value)}
                                    onPressEnter={() => handleSave(item.id)} /> :

                                <p className='input-task' onClick={() => handleClickDone(item.name)}>
                                    {doneTasks.includes(item.name) ? <Text delete>{item.name}</Text> : item.name}
                                </p>
                            }
                        </p>
                        <p className='button-task'>
                            {idEdit === item.id ?
                                <Button type="primary" className='button-in-task' ghost onClick={() => handleSave(item.id)}><SaveOutlined style={{ fontSize: '20px', color: 'white' }} /></Button> :
                                <Button type="primary" className='button-in-task' ghost onClick={() => handleEdit(item.id, item.name)}><EditOutlined style={{ fontSize: '20px', color: 'white' }} /></Button>
                            }


                            <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No" onConfirm={() => handleClickDelete(item.id)}>
                                <Button type="primary" danger ghost className='button-in-task'><DeleteOutlined style={{ fontSize: '20px' }} /></Button>
                            </Popconfirm>
                        </p>

                    </li>)

                })}

            </ul>
            {/* <button onClick={handleClick}>clik</button> */}


        </>
    )
}
export default TaskList;
