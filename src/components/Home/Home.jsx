import React from "react";
import CardElement from "../Card/Card";
import TaskCard from "../TaskCard/TaskCard";
import { MdDescription,MdOutlineTaskAlt } from "react-icons/md";
import './home.css';
import '../Sidebar/Sidebar.css';
import {useAuthentication} from '../../Context/userContext';
export default function Home(){
  let state = useAuthentication();
  // let note = useNoteAuthentication(); 
  return(
        <>
        <h1>Welcome John</h1>
        <div className="TaskIcon">
      < MdDescription size={30} style={{marginTop:"10px",color:"#203562"}}/><p className="paraTask">My Notes</p>
      </div>
          {/* <MdDescription size={32} /><p className='paracls2'>My Notes</p>
          <p className="Recentcls">Recently View</p> */}

          <div className="row container-fluid">
            {state.note.map((value)=>(
             <div className="col-xl-3 col-md-3 col-sm-3">
             <CardElement 
               text={value.text}
               textArea={value.textArea}
             />
             </div>
            ))}
             
             {/* </div>      
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
               <CardElement/>
             </div>
             <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
               <CardElement/>
             </div>
             <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
               <CardElement/>
             </div>
              */}
          
          <div className="TaskIcon">
      < MdOutlineTaskAlt size={30} style={{marginTop:"10px"}}/><p className="paraTask">My Tasks</p>
      </div>
          <div className="card taskcls container-fluid">
            {state.task.map((value)=>(
             <TaskCard title={value.title}
             time={value.time}
             />
            //<p>{value.title}</p>
            ))
            }
          </div>
        </div> 
        </>
        
    )
}
