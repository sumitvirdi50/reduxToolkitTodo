import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
  todos: [{}],
  modal: false,
  loader:false,
  deleteModal:false,
  toaster:false,
}

export const getUser = createAsyncThunk("getUser",async (data,{rejectWithValue}) => {
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

export const createUser = createAsyncThunk("createUser",async (data,{rejectWithValue}) => {
  const response = await fetch("https://65a035da600f49256fafb619.mockapi.io/api/user/users",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
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

export const deleteUser = createAsyncThunk("deleteUser",async (data,{rejectWithValue}) => {
  const response = await fetch(`https://65a035da600f49256fafb619.mockapi.io/api/user/users/${data}`,{
    method:"DELETE",
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
);

export const updateUser = createAsyncThunk("updateUser",async (data,{rejectWithValue}) => {

  const response = await fetch(`https://65a035da600f49256fafb619.mockapi.io/api/user/users/${data.id}`,{
    method:"PUT",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(data.input)
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
    showModal: (state, action) => {
      state.modal = !state.modal
    },
    showDeleteModal: (state, action) => {
      state.deleteModal = !state.deleteModal
    },
    showLoader:(state) => {
      state.loader=true
    },
    showToaster:(state) => {
      state.toaster=false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loader=true
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loader=false
        state.todos=action.payload;
      })
      .addCase(getUser.rejected, (state) => {});
      builder
      .addCase(createUser.pending, (state) => {
        state.loader=true
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loader=false
        state.modal=false
        state.toaster=true
        state.todos.push(action.payload);
      })
      .addCase(createUser.rejected, (state) => {});
      builder
      .addCase(deleteUser.pending, (state) => {
        state.loader=true
        state.deleteModal=false
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loader=false
        state.deleteModal=false
        state.todos = state.todos.filter((items) => items.id !== action.payload.id );
        state.toaster=true
      })
      .addCase(deleteUser.rejected, (state) => {});
      builder
      .addCase(updateUser.pending, (state) => {
        state.loader=true
        state.deleteModal=false
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loader=false
        state.modal=false
        state.toaster=true
        const { id, name, email, phoneNumber, address } = action.payload;
      const todoToUpdate = state.todos.find((item) => item.id === id);
      if (todoToUpdate) {
        todoToUpdate.name = name;
        todoToUpdate.email = email;
        todoToUpdate.phoneNumber = phoneNumber;
        todoToUpdate.address = address;
      }

      })
      .addCase(updateUser.rejected, (state) => {});
  },
  
});


export const { addTodo, removeTodo, updateTodo, showModal,showDeleteModal, showToaster } = todoSlice.actions

export default todoSlice.reducer