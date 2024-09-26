import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { taskEdit } from '../../../redux/reducers/taskEditReducer';

const InputForEditTask = ({ logger, id, textInput, task, handleSave }) => {
    const dispatch = useDispatch();
    const edit = useSelector(state => state.taskEditReducer);
    return (
        <Input ref={textInput} value={edit} onChange={(e) => dispatch(taskEdit(e.target.value))}
            onPressEnter={() => handleSave(id, task, logger)} />
    )
}
export default InputForEditTask;