import { createSlice } from "@reduxjs/toolkit";
export const taskSlice = createSlice({
    name: "tasks",
    initialState: {
      tasks: [],
      notes:[],
    },
    reducers: {
      addTodo: (state, action) => {
   console.log(action.payload)
   state.tasks = [...state.tasks,action.payload]
      },
      addNote:(state,action)=>{
        console.log(action.payload)
        state.notes = [...state.notes,action.payload]
      },
    }
  });
  
  // Action creators are generated for each case reducer function
  export const { addTodo,addNote } = taskSlice.actions;
  export default taskSlice.reducer;