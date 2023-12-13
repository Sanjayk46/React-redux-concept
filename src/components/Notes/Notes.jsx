import React from 'react';
import CardElement from '../Card/Card';
import { IoMdTime } from 'react-icons/io';
import { MdDescription, MdOutlineFormatColorFill, MdOutlineFormatSize} from "react-icons/md";
import './note.css';
import {IoMdClose} from 'react-icons/io';
import { ToggleButtonGroup,ToggleButton } from 'react-bootstrap';
import {MdFormatAlignLeft} from 'react-icons/md';
import { FaListUl } from 'react-icons/fa';
import{AiOutlineFontColors} from 'react-icons/ai';
import {BiRedo, BiUndo} from 'react-icons/bi';
import { useState } from 'react';
import { useEffect} from 'react';
// import TaskCard from "../TaskCard/TaskCard";
import { useSelector,useDispatch } from 'react-redux/es/exports';
// import { useAuthentication } from '../../Context/userContext';
import { addNote } from '../../Redux/Reducers/tasks.reducer';
// import { addDelete } from '../../Redux/Reducers/tasks.reducer';
export default function Note(){
   const [currentTime, setCurrentTime]=useState('');
 useEffect(()=>{
   const updateCurrentTime = ()=>{
    const timeOption = {hour:'2-digit',minute:'2-digit',hour12:true};
    const newTime = new Date().toLocaleTimeString('en-US',timeOption);
    setCurrentTime(newTime)
   };
   updateCurrentTime();
   const intervalId = setInterval(updateCurrentTime)
   return ()=> clearInterval(intervalId)
},[]);
const dispatcher = useDispatch()
let stateNote = useSelector((stateNote)=>{
  return stateNote.tasksReducer
});
console.log(stateNote)
let note = useSelector((note)=>{
  return note.tasksReducer
});
// const {note,setNote} = useAuthentication();
//const[task,setTask] = useState([]); 
const[text,setText] = useState('');
const[textArea,setTextarea] = useState('');
const[date,setDate]=useState('');
const handleChange=(event)=>{
  const name = event.target.value;
  // const time = event.target.value;
  setText(name);

}
const saveTask=()=>{
 dispatcher(addNote({text,textArea,date}));
 setText('');
 setTextarea('');
 setDate('');
}
// const deleteNote =(id)=>{
//  dispatcher(addDelete(note.delete.filter((node,index)=>index !==id)))
 
// }
return(
        <>
        <div class="card note" style={{display:"flex",flexDirection:"row-reverse"}}>
           <div class="card-body">
            <div class="card-title paracls taskcls2" >Add a Note</div> 
            <div style={{display:"flex",flexDirection:"row-reverse"}}>
           <IoMdClose size={25} className='closecls'/>
           </div>
            <div><input class="titlecls inputcls" placeholder="Title" type="text" value={text} onChange={handleChange}/></div>
            <div> <textarea placeholder='Take a note...' type="text" className='inputcls' value={textArea} onChange={(e)=>setTextarea(e.target.value)}/></div>
            <IoMdTime size={30} style={{marginBottom:"10px",marginLeft:"10px"}}/><input type='datetime-local' value={date} onChange ={(e)=>setDate(e.target.value)} style={{marginBottom:"10px"}}/>
            {/* <div class='timedivcls'>
             <IoMdTime size={30} style={{marginTop:"10px",marginLeft:"10px"}}/><p class="timecls">Today {currentTime}</p>
            </div> */}
            <br/>
            <div className='row'>
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
              <ToggleButtonGroup name='togglebuttongrp' type="button" style={{marginLeft:"20px"}}>
                <ToggleButton name='togglebutton' type="button" className="btn btn-light">
                <MdOutlineFormatSize size={20} style={{color:"#203562"}}/>
                </ToggleButton>
                <ToggleButton name='togglebutton' type="button" className="btn btn-light">
                <MdOutlineFormatColorFill size={20} style={{color:"#203562"}}/>
                </ToggleButton>
                <ToggleButton name='togglebutton' type="button" className="btn btn-light">
                <FaListUl size={20} style={{color:"#203562"}}/>
                </ToggleButton>
                <ToggleButton name='togglebutton' type="button" className="btn btn-light">
                <AiOutlineFontColors size={20} style={{color:"#203562"}}/>
                </ToggleButton>
                <ToggleButton name='togglebutton' type="button" className="btn btn-light">
                <MdFormatAlignLeft size={20} style={{color:"#203562"}}/>
                </ToggleButton>
                <ToggleButton name='togglebutton' type="button" className="btn btn-light">
                <BiUndo size={20} style={{color:"#203562"}}/>
                </ToggleButton>
                <ToggleButton name='togglebutton' type="button" className="btn btn-light">
                <BiRedo size={20} style={{color:"#203562"}}/>
                </ToggleButton>
            </ToggleButtonGroup>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
           <button class="btn btn-lg btn-light buttoncls" onClick={saveTask}>Add Note</button>
            </div>
        </div>
              
          </div>
          </div>
          <div class="TaskIcon2">
      < MdDescription size={30} style={{marginTop:"10px",color:"#203562"}}/><p class="paraTask">My Notes</p>
      </div>
          <p className='Recentcls'>Recently Viewed</p>
          <div class="row">
          {stateNote.notes.map((item,index)=>(
            <div class="col-xl-3col-lg-3 col-md-3 col-sm-3" style={{paddingBottom:"20px"}}>  
            <CardElement 
            // onDelete={deleteNote}
            id={index}
            text={item.text}
             textArea={item.textArea}
             time={item.date}/>
          </div>
          ))}
           </div>   
        </> 
    )
}

