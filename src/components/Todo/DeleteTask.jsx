import { DeleteOutlined } from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';

const DeleteTask = ({logger, id, task, handleClickDelete}) =>{


    return(
        <>
            <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No" onConfirm={() => handleClickDelete(id, task, logger)}>
                <Button type="primary" danger ghost className='button-in-task'><DeleteOutlined style={{ fontSize: '20px' }} /></Button>
            </Popconfirm>
        </>
    )
}
export default DeleteTask;