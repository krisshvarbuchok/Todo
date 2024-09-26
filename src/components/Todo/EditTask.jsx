import { SaveOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const EditTask = ({ handleSave, task, logger }) => {

    return (
        <Button type="primary" className='button-in-task' ghost onClick={() => handleSave(task, logger)}><SaveOutlined style={{ fontSize: '20px', color: 'white' }} /></Button>
    )
}
export default EditTask;