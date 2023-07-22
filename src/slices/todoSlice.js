import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todoList.push(action.payload);
      const localStorageTodoList = JSON.parse(
        localStorage.getItem("todo-list")
      );
      if (localStorageTodoList) {
        localStorageTodoList.push(action.payload);
        localStorage.setItem("todo-list", JSON.stringify(localStorageTodoList));
      } else {
        localStorage.setItem(
          "todo-list",
          JSON.stringify([{ ...action.payload }])
        );
      }
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
