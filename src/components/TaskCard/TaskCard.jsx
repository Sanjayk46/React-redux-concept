import React from 'react';
import './taskcard.css';
import { MdOutlineTaskAlt } from "react-icons/md";
import {FaRegCircle} from "react-icons/fa";
import{IoIosStar, IoMdStarOutline} from "react-icons/io";
import { useState } from 'react';
// import moment from 'moment';
// import relativeTime from 'days';
export default function TaskCard({title,time}){
//   const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// const MONTHS_OF_YEAR = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// const daysBetween = (date1, date2) => {
//   const ONE_DAY_ON_SECONDS = 1000 * 60 * 60 * 24;
//   const date1Ms = date1.getTime();
//   const date2Ms = date2.getTime();

//   const differenceMs = date2Ms - date1Ms;
//   return Math.round(differenceMs / ONE_DAY_ON_SECONDS); 
// }

// const getHoursFromDate = ({time}) => {
//   var hours = {time}.getHours();
//   var minutes = {time}.getMinutes();
//   var ampm = hours >= 12 ? 'pm' : 'am';
//   hours = hours % 12;
//   hours = hours ? hours : 12; // the hour '0' should be '12'
//   minutes = minutes < 10 ? '0' + minutes : minutes;
//   return hours + ':' + minutes + ' ' + ampm;
// }

// const dateFromNow = ({time}) => {
//   const currentDate = new Date();

//   if({time}.getUTCDate() === currentDate.getUTCDate() && {time}.getUTCMonth() === currentDate.getUTCMonth() && {time}.getUTCFullYear() === currentDate.getUTCFullYear()) {
//     const hours = Math.floor(Math.abs({time} - currentDate) / 36e5);

//     if (hours === 0) {
//       const minutes = Math.round(((Math.abs({time} - currentDate) % 86400000) % 3600000) / 60000);
//       return minutes <= 1 ? 'A while ago' : `${minutes} minutes ago`
//     } else {
//       return `${Math.floor(hours)} hours ago`;
//     }
//   } else {
//     if ({time}.getUTCFullYear() < currentDate.getUTCFullYear() || daysBetween({time}, currentDate) > 6) {
//       return `${{time}.getDate()}/${MONTHS_OF_YEAR[{time}.getMonth()]} /${{time}.getFullYear()}`;
//     } else {
//       return `${DAYS_OF_WEEK[{time}.getDay()]} at ${getHoursFromDate({time})}`;
//     }
//   }
// }
const [isActive,setIsactive]=useState(false);  
const[isClick,setIsclick]=useState(false); 
return(
         <div class="row taskcard">
            <div className='row'>
              <div className='col-xl-1 col-lg-1 col-md-1 col-sm-1' onClick={()=>setIsclick(!isClick)}>
              {/* <FaRegCircle size={20} style={{color:"#203562",marginTop:"10px"}}/> */}
              {isClick ? < MdOutlineTaskAlt size={30} style={{color:"#203562",marginTop:"10px"}}/> :< FaRegCircle size={28} style={{color:"#203562",marginTop:"10px"}}/>}
                </div>
            <div className='col-xl-10 col-lg-10 col-md-10 col-sm-10'>
                <h5 className='filecls'>{title}</h5>
                <p className='filecls2'>{time}</p>
            </div>
                <div className='col-xl-1 col-lg-1 col-md-1 col-sm-1' onClick={()=>setIsactive(!isActive)}>
              {/* <IoMdStarOutline size={30} style={{color:"#203562",marginTop:"10px",marginLeft:"35px"}} /> */}
              {isActive ? <IoIosStar size={30} style={{color:"#203562",marginTop:"10px"}}/>:<IoMdStarOutline  size={30} style={{marginTop:"10px",color:"#203562"}}/>}
              {/* marginTop:"10px",marginLeft:"35px" */}
                </div>
                </div>   
         </div>
    )
    
}
