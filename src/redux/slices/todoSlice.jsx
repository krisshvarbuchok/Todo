import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const config = {
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
        'Content-Type': 'application/json',
        accept: 'application/json',
    }
}
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

const getTasks = async () => {
    const response = await api.get('/todos', config);
    return response;
}
const createTask = async (newTask) => {
      const response = await api.post('/todos', newTask, config);
      console.log('Задача успешно создана:', response.data);
      return response;
  }
  const deleteTask = async(id) => {
    const response = await api.delete(`/todos/${id}`, config);
    console.log('Задача удалена:', response.data);
    return response;
}

const editIsComplited = async(id, boolean) => {
        const response = await api.patch(`/todos/${id}/isCompleted`, boolean, config);
        console.log('сделано/ не сделано:', response.data);
        return response.data;
    }

const fetchGetTodos = createAsyncThunk('todos/fetchGetTodos', async () => {
    const { data } = await getTasks();
    console.log(data);
    return data;
})
const fetchCreateTask = createAsyncThunk('task/fetchCreateTask', async (newTask) => {
    const { data } = await createTask(newTask);
    //console.log(data);
    return data;
})
const fetchDeleteTask = createAsyncThunk('task/fetchDeleteTask', async (id) => {
    const { data } = await deleteTask(id);
    //console.log(data);
    return {id};
})
const fetchEditIsCompleted = createAsyncThunk('task/fetchEditIsCompleted', async ({id, boolean}) => {
    const data = await editIsComplited(id, boolean);
    const updatedTask = Array.isArray(data) ? data[0] : data;
    return { id, boolean: updatedTask.isCompleted };
})


const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        data: [],
        status: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
    builder
        .addCase(fetchGetTodos.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(fetchGetTodos.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.data = action.payload
        })
        .addCase(fetchGetTodos.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        })
        .addCase(fetchCreateTask.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.data.push(action.payload)
        })
        .addCase(fetchDeleteTask.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.data = state.data.filter(item => item.id !== action.payload.id)
        })
        .addCase(fetchEditIsCompleted.fulfilled, (state, action) =>{
            state.status = 'succeeded'
            state.data = state.data.map(item => item.id === action.payload.id ? {...item, isCompleted: action.payload.boolean} : item)
        });
    }
})

export { fetchGetTodos, fetchCreateTask, fetchDeleteTask , fetchEditIsCompleted }
export default todoSlice.reducer;