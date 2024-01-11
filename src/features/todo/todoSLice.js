import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
  todos: [{
    id: 1, 
    name: "sumit virdi",
    email: "sumitvirdi50@gmail.com",
    address: "b-23 Ial colony",
    phoneNumber: 997543653
  }],
  modal: false
}

export const createUser = createAsyncThunk("createUser",async (data,{rejectWithValue}) => {

  const response = await fetch("https://65a035da600f49256fafb619.mockapi.io/api/user/users",{
    method:"GET",
    headers:{
      "Content-Type":"application/json"
    }
  })

  try{
    const result = await response.json()
    return result
  }
 catch(error){

  return rejectWithValue(error)

 }
}

)

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todoToUpdate = state.todos.find((item) => item.id === id);
      console.log("todoToUpdate", todoToUpdate);
      if (todoToUpdate) {
        todoToUpdate.text = newText;
      }
    },
    showModal: (state, action) => {
      console.log("statestate", state);
      state.modal = !state.modal
    }
  },
});


export const { addTodo, removeTodo, updateTodo, showModal } = todoSlice.actions

export default todoSlice.reducer