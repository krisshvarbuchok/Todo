import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const WillEditTask =({logger, handleEdit, id, task}) =>{

    return(
        <>
            <Button type="primary" className='button-in-task' ghost onClick={() => handleEdit(id, task, logger)}><EditOutlined style={{ fontSize: '20px', color: 'white' }} /></Button>
        </>
    )
}
export default WillEditTask;