import React from "react";
import "./Sidebar.css";
import itachi from './Itachi.png';
import { GoHome } from "react-icons/go";
import { IoSearchSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineTaskAlt,MdDescription} from "react-icons/md";
import { RiInboxArchiveLine } from "react-icons/ri";
import {Link}from 'react-router-dom';
export default function Sidebar(){
    return(
        <div className="sidebar">
        <div className="row">
         <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 johncls" >
           <img src={itachi} alt="itachi" className="imgcls"/>
         </div>
         <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
            <h5 className="johncls2">John Doe</h5>
            <p className="johncls3">Johndoe@gmail.com</p>
         </div>
        </div>
        <div className="row"> 
        <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11">
        <ul>
            <Link to="/" style={{textDecoration:"none"}}>
            <li class="nav-link active homecls">
            <GoHome size={30}/>Home
                        </li></Link>
                      
                      <Link to="" style={{textDecoration:"none"}}>
                      <li class="nav-link">   
                            <IoSearchSharp size={30}/>
                                Search
                            </li>
                      </Link>     
                            <Link to="/notes" style={{textDecoration:"none"}}>
                            <li class="nav-link">
                            
                            < MdDescription size={30}/>
                                Notes
                            
                            </li></Link>
                            <Link to="/task" style={{textDecoration:"none"}}>
                            <li class="nav-link">
                              
                            <MdOutlineTaskAlt size={30}/>
                                Tasks
                               
                            </li></Link>
                            <li class="nav-link">
                            <RiInboxArchiveLine size={30}/>Archive
                            
                            </li>
                            <li class="nav-link">
                             < RiDeleteBin6Line size={30}/>Bin
                        
                            </li>
                        </ul>
        </div>
        </div>
     </div>
    )
}