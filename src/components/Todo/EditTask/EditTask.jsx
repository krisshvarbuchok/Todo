import { SaveOutlined} from '@ant-design/icons';
import { Button } from 'antd';
import styles from './editTask.module.css';

const EditTask = ({handleSave, id, task, logger}) => {

    return(
        <>
            <Button type="primary" className={styles.buttonInTask} ghost onClick={() => handleSave(id, task, logger)}><SaveOutlined style={{ fontSize: '20px', color: 'white' }} /></Button>
        </>
    )       
}
export default EditTask;