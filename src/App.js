import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Task from './components/Task/Task';
import Notes from './components/Notes/Notes';
import {BrowserRouter} from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";

function App() {
  return ( 
    <BrowserRouter> 
     <div className='row'>
          <div class='col-xl-3 col-lg-3 col-md-3 col-sm-3'>
            <Sidebar />
            </div>
           <div class='col-xl-9 col-lg-9 col-md-9 col-sm-9'>
           <Routes>
          <Route path='/' element={<Home />}></Route>
          {/* <Route path='/search' element={< Login />}></Route> */}
          <Route path='/notes' element={<Notes />}></Route> 
          <Route path='/task' element={<Task />}></Route>   
          </Routes> 
          </div>      
     </div>
    </BrowserRouter>
  );
}

export default App;
// import './App.css';
// import React, { useRef } from "react";
// import "./App.css";
// import { useDispatch } from "react-redux";
// import { addTodo } from "./Redux/Reducers/tasks.reducer";
// import Lists from "./components/List/List";

// export default function App() {
//   const dispatcher = useDispatch();
//   const inputRef = useRef(null);

//   function addtask() {
//     dispatcher(addTodo(inputRef.current.value));
//     inputRef.current.value = "";
//   }

//   return (
//     <div className="App">
//       <div className="form-body">
//         <input ref={inputRef} placeholder="Enter your task" />
//         <button onClick={addtask}>Add</button>
//       </div>
//       <Lists />
//     </div>
//   );
// }