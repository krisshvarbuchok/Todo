
const isCompletedFunction = (list, id) => list.find(item => item.id === id && item.isCompleted)
export default isCompletedFunction;