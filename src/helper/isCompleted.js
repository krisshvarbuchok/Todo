
const isCompletedFunction = (data, id) => data.find(item => {
    return item.id === id ? item.isCompleted : false;
})
export default isCompletedFunction;