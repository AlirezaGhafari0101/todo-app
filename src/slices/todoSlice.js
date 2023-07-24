import { createSlice } from "@reduxjs/toolkit";

const getInitialTodos = () => {
  const localStorageTodoList = JSON.parse(localStorage.getItem("todo-list"));
  if (localStorageTodoList) {
    return localStorageTodoList;
  }
};

const initialState = {
  todoList: getInitialTodos(),
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
    deleteTodo(state, action) {
      const localStorageTodoList = JSON.parse(
        localStorage.getItem("todo-list")
      );
      const filteredTodos = localStorageTodoList.filter(
        (todo) => todo.id !== action.payload.id
      );
      localStorage.setItem("todo-list", JSON.stringify(filteredTodos));
      state.todoList = filteredTodos;
      console.log(action);
    },
    updateTodo(state, action) {
      const localStorageTodoList = JSON.parse(
        localStorage.getItem("todo-list")
      );
      const updatedTodoIndex = localStorageTodoList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      let updatedTodoItem = localStorageTodoList[updatedTodoIndex];

      if (updatedTodoItem) {
        updatedTodoItem = {
          ...updatedTodoItem,
          title: action.payload.title,
          status: action.payload.status,
        };

        localStorageTodoList[updatedTodoIndex] = updatedTodoItem;
        state.todoList = localStorageTodoList;
        localStorage.setItem("todo-list", JSON.stringify(localStorageTodoList));
      }
    },
    doTodo(state, action) {
      const localStorageTodoList = JSON.parse(
        localStorage.getItem("todo-list")
      );
      const updatedTodoIndex = localStorageTodoList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      let updatedTodoItem = localStorageTodoList[updatedTodoIndex];
      if (updatedTodoItem) {
        updatedTodoItem = {
          ...updatedTodoItem,
          status:
            updatedTodoItem.status === "complete" ? "incomplete" : "complete",
        };

        localStorageTodoList[updatedTodoIndex] = updatedTodoItem;
        state.todoList = localStorageTodoList;
        localStorage.setItem("todo-list", JSON.stringify(localStorageTodoList));
      }
    },
    filterTodo(state, action) {
      const localStorageTodoList = JSON.parse(
        localStorage.getItem("todo-list")
      );
      let updatedTodos = localStorageTodoList.filter((todo) => {
        if (action.payload.status === "all") {
          return todo;
        }
        return todo.status === action.payload.status;
      });
      state.todoList = updatedTodos;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, doTodo, filterTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
