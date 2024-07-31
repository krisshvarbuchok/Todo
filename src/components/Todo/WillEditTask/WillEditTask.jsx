import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import styles from './willEditTask.module.css';

const WillEditTask = ({ logger, handleEdit, id, task }) => {

    return (
        <Button type="primary" className={styles.buttonInTask} ghost onClick={() => handleEdit(id, task, logger)}><EditOutlined style={{ fontSize: '20px', color: 'white' }} /></Button>

    )
}
export default WillEditTask;