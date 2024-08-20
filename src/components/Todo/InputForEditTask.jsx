import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { editTask } from '../../redux/actions/editTaskAction';


const InputForEditTask = ({logger, task, textInput, handleSave}) => {

    const {edit} = useSelector(state => state.edit);
    const dispatch = useDispatch();
    return(
        <>
            <Input ref={textInput} value={edit} onChange={(e) => dispatch(editTask(e.target.value))}
                onPressEnter={() => handleSave(task, logger)} />
        </>
    )
}
export default InputForEditTask;