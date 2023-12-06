import React from 'react';
import  './Card.css';
import { MdOutlineEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from "react-icons/ri";
export default function CardElement({text,textArea}){
return(
    <>
    <div class="card notesCard">  
    <div class='card-body'>
    <div className='row'>
     <div class='col-xl-8 col-lg-8 col-md-8 col-sm-8 card-title cardTitle'>{text}
     </div>
     <div class='col-xl-2 col-lg-2 col-md-2 col-sm-2'>
     <MdOutlineEdit size={20}/> 
     </div>
     <div class='col-xl-2 col-lg-2 col-md-2 col-sm-2'>
     <RiDeleteBin6Line size={20}/>
     </div>
     </div>
     <p class='card-Text'>{textArea}</p>
    </div>
   </div>
</>
)
}

 {/* style={{width:"317px",height:"263px"}} width: 317px;
height: 263px;*/}
//style={{width:"250px",height:"200px"}} 