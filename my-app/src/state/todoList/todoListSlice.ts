import { createSlice } from '@reduxjs/toolkit';

interface ToDoListState {
  todos: string[];
}

const initialState: ToDoListState = {
  todos: [],
};

const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoListSlice.actions;

export default todoListSlice.reducer;