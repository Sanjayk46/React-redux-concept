import React from 'react';
import  './Card.css';
import { MdOutlineEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from "react-icons/ri";
import moment from 'moment';
export default function CardElement({text,textArea,time,onDelete,id}){
   const handleClick=()=>{
     onDelete(id)
   }
   const handleEditclick=()=>{

   }
   const currentDate = moment(new Date (time).getTime()).fromNow();
   console.log(currentDate);
return(
    <>
    <div className="card notesCard">  
    <div className='card-body'>
    <div className='row'>
     <div class='col-xl-8 col-lg-8 col-md-8 col-sm-8 card-title cardTitle'>{text}
     </div>
     <div class='col-xl-2 col-lg-2 col-md-2 col-sm-2'>
     <MdOutlineEdit size={20} onClick={handleEditclick}/> 
     </div>
     <div class='col-xl-2 col-lg-2 col-md-2 col-sm-2'>
     <RiDeleteBin6Line size={20} onClick={handleClick}/>
     </div>
     </div>
     <p className='card-Text cardText1'>{textArea}</p>

    </div>
    <p className='cardText'>{currentDate}</p>   
    </div>
</>
)
}

 {/* style={{width:"317px",height:"263px"}} width: 317px;
height: 263px;*/}
//style={{width:"250px",height:"200px"}} 