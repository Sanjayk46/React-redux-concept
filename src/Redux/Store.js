import { configureStore } from "@reduxjs/toolkit";
// ROOT REDUCER
import TasksReducer from "./Reducers/tasks.reducer";

const store = configureStore({
  // ROOT REDUCER
  reducer: {
    tasksReducer: TasksReducer,
  },
});

export default store;