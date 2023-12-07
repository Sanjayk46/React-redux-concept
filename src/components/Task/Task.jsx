import React, { useEffect } from "react";
import TaskCard from "../TaskCard/TaskCard";
import { MdOutlineTaskAlt } from "react-icons/md";
// import daysjs from 'dayjs';
import './Task.css';
// import {v4 as uuidv4} from "uuid";
import {CiCalendar} from "react-icons/ci";
// import {FaRegCircle} from "react-icons/fa";
// import{IoMdStarOutline} from "react-icons/io";
 import { useState } from "react";
 import { useAuthentication } from "../../Context/userContext";
export default function Task(){
const {task,setTask} = useAuthentication();

// const[task,setTask] = useState([]); 
// const[state,setState] = useState({
//   title:"",
//   time:"",
//   id:uuidv4,
// });
// const handleChange = (event)=>{
//   setState({...task,[event.target.name]:event.target.value});
// }
// const saveTask=()=>{
//   setTask([...task,state]);
//   setState({
//     title:"",
//     time:"",
//   })
// }
const[title,setTitle] = useState('');
const[time,setTime] = useState(new Date());
// const[selectOne,setSelectOne]=useState(new Date);
// const[daysAgo,setDaysago]=useState(0);
const handleChange=(event)=>{
  const name = event.target.value;
  setTitle(name);
}
const saveTask=()=>{
 setTask([...task,{title,time}]);
 //setNotes('');
 console.log(setTask);
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
        {task.map((item)=>(
            <TaskCard 
            title={item.title}
            time={item.time}
            />
        ))}
      </div>
     </>

    )
}