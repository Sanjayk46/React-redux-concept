// import React from 'react';
// import './App.css';
// import Home from './components/Home/Home';
// import Sidebar from './components/Sidebar/Sidebar';
// import Notes from './components/Notes/Notes';

// function App() {
//   return (
//      <div class='row'>
//           <div class='col-md-3 col-sm-3'>
//             <Sidebar />
//             </div>
//           <div class='col-md-9 col-sm-9'>
//             <Notes />
//           </div> 
//      </div>
//     <>

//     </>
//   );
// }

// export default App;
import './App.css';
import React, { useRef } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { addTodo } from "./Redux/Reducers/tasks.reducer";
import Lists from "./components/List/List";

export default function App() {
  const dispatcher = useDispatch();
  const inputRef = useRef(null);

  function addtask() {
    dispatcher(addTodo(inputRef.current.value));
    inputRef.current.value = "";
  }

  return (
    <div className="App">
      <div className="form-body">
        <input ref={inputRef} placeholder="Enter your task" />
        <button onClick={addtask}>Add</button>
      </div>
      <Lists />
    </div>
  );
}