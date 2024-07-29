// async function getTasks(){
//     try{
//         const response = await fetch('https://todo-redev.herokuapp.com/api/todos', {
//             method: 'GET',
//             headers:{
//                 accept: 'application/json',
//                 Authorization: `Bearer ${localStorage.getItem('token')}`
//             }
//         });
//         const data = await response.json();
        
//         console.log(' задачи ', data);
//         //setList(data)
//         //console.log(typeof list);
//       }
//       catch(error){
//         console.log('error', error.message);
//       }
//       }
// export default getTasks;