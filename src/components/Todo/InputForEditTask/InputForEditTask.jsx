import { Input } from 'antd';

const InputForEditTask = ({ logger, task, id, textInput, taskEdit, setTaskEdit, handleSave }) => {

    return (
        <Input ref={textInput} value={taskEdit} onChange={(e) => setTaskEdit(e.target.value)}
            onPressEnter={() => handleSave(id, task, logger)} />
    )
}
export default InputForEditTask;