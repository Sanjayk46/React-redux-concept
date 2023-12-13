import React from "react";
import TaskCard from "../TaskCard/TaskCard";
import { MdOutlineTaskAlt } from "react-icons/md";
import './Task.css';
import {CiCalendar} from "react-icons/ci";
import { useState } from "react";
// import { useAuthentication } from "../../Context/userContext";
import { useDispatch,useSelector } from "react-redux";
import { addTodo} from "../../Redux/Reducers/tasks.reducer";
export default function Task(){

// const {task,setTask} = useState([]);
const dispatcher = useDispatch();
const[title,setTitle] = useState('');
let state = useSelector((state)=>{
  return state.tasksReducer
})
const[time,setTime] = useState(new Date());

const handleChange=(event)=>{
  const name = event.target.value;
  setTitle(name);
}
const saveTask=()=>{

  dispatcher(addTodo({title,time}))

//  dispatcher([...task,{title,time}]);
//  console.log(setTask);
 setTitle('');
 setTime('');
}   
// const handleTimechange =(e)=>{
//   const selectedDate = e.target.value;
//   useEffect(()=>{
//     const currentTime = dayjs();

//   })
//}
// useEffect(()=>{
//   const savedNotes =JSON.parse(
//     localStorage.getItem('notes')
    
//     );
//   console.log(savedNotes);
//     if(savedNotes){
//     setTask(savedNotes)
//   }
// },[]);

  // // useEffect(()=>{
  //   localStorage.setItem('notes',JSON.stringify(task));
  // // },[task]);

return(
     <>
    <div className="card note">
    <div className="card-body">
            <div className="card-title taskcls2">Add a Task</div>
            <div><input className="titlecls inputcls" placeholder="Title" value={title} onChange={handleChange}/></div>
            {/* <input placeholder='Add a Task...' className='inputcls' /> */}
            <br />
            <CiCalendar size={20}/><input type='datetime-local'  value={time} onChange={(e)=>setTime(e.target.value)}/>  
             {/* value={time} onChange={(e)=>setTime(e.target.value)} */}
            <div style={{display:"flex",flexDirection:"row-reverse"}}>
            <button className='btn btn-light btn-lg buttoncls' onClick={saveTask}>Add Task</button>
            </div>
           </div>
       
          {/* <IoMdClose className='closecls'/> */}
          </div>
      <div className="TaskIcon">
      < MdOutlineTaskAlt size={30} style={{marginTop:"10px",color:"#203562"}}/><p className="paraTask">My Tasks</p>
      </div>
     
     <div className="card taskcls">
        {state.tasks && state.tasks.map((item)=>(
            <TaskCard 
            title={item.title}
            time={item.time}
            />
        ))}
      </div>
     </>

    )
}