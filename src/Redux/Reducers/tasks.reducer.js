import { createSlice } from "@reduxjs/toolkit";
export const taskSlice = createSlice({
    name: "tasks",
    initialState: {
      tasks: [],
    },
    reducers: {
      addTodo: (state, action) => {
        console.log(action);
        if (action.payload) {
          state.tasks.push(action.payload);
        }
      },
      // deleteTodo: (state, action) => {
      //   // state.value -= 1
      //   console.log(action);
      // },
    },
  });
  
  // Action creators are generated for each case reducer function
  export const { addTodo } = taskSlice.actions;
  export default taskSlice.reducer;