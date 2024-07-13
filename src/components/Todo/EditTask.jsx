import { SaveOutlined} from '@ant-design/icons';
import { Button } from 'antd';

const EditTask = ({handleSave, id, task, logger}) => {

    return(
        <>
            <Button type="primary" className='button-in-task' ghost onClick={() => handleSave(id, task, logger)}><SaveOutlined style={{ fontSize: '20px', color: 'white' }} /></Button>
        </>
    )       
}
export default EditTask;