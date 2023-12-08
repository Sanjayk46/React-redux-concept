import React from 'react';
import './taskcard.css';
import { MdOutlineTaskAlt } from "react-icons/md";
import {FaRegCircle} from "react-icons/fa";
import{IoIosStar, IoMdStarOutline} from "react-icons/io";
import { useState } from 'react';
import moment from 'moment';
export default function TaskCard({title,time}){
//  console.log(title);
//  console.log(time);
const [isActive,setIsactive]=useState(false);  
const[isClick,setIsclick]=useState(false);
const date = moment(new Date (time).getTime()).fromNow();

return(
         <div className="row taskcard">
            <div className='row'>
              <div className='col-xl-1 col-lg-1 col-md-1 col-sm-1' onClick={()=>setIsclick(!isClick)}>
              {/* <FaRegCircle size={20} style={{color:"#203562",marginTop:"10px"}}/> */}
              {isClick ? < MdOutlineTaskAlt size={30} style={{color:"#203562",marginTop:"10px"}}/> :< FaRegCircle size={28} style={{color:"#203562",marginTop:"10px"}}/>}
                </div>
            <div className='col-xl-10 col-lg-10 col-md-10 col-sm-10'>
                <h5 className='filecls'>{title}</h5>
                <p className='filecls2'>{date}</p>
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
