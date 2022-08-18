import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoList: []
  },
  reducers: {
    addToDo: (state, action) => {
      const newItem = {
        id: Date.now(),
        task: action.payload,
        complete: false,
        edit: false,
      }
      state.todoList.push(newItem);
    },

    removeToDo: (state, action) => {
      state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
    },

    changeCompletion: (state, action) => {
      const index = state.todoList.findIndex(todo => todo.id === action.payload);
      state.todoList[index].complete = !state.todoList[index].complete;
    },

    deleteAllCompleted: (state, action) => {
      state.todoList = state.todoList.filter(todo => !todo.complete);
    },

    checkAll: (state, action) => {
      state.todoList.forEach(todo => {
        todo.complete = action.payload;
      });
    },

    setEditable: (state, action) => {
      const index = state.todoList.findIndex(todo => todo.id === action.payload);
      state.todoList[index].edit = true;
    },

    editToDo: (state, action) => {
      const index = state.todoList.findIndex(todo => todo.id === action.payload.id);
      state.todoList[index].task = action.payload.value;
      state.todoList[index].edit = false;
    },

  }
})

export const {
  addToDo,
  removeToDo,
  changeCompletion,
  getActiveCount,
  deleteAllCompleted,
  checkAll,
  setEditable,
  editToDo,
} = todoSlice.actions;

export default todoSlice.reducer;