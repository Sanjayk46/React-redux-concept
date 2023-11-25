import React from "react";
import "./Sidebar.css";
import { GoHome } from "react-icons/go";
import { IoSearchSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineTaskAlt } from "react-icons/md";
import { RiInboxArchiveLine } from "react-icons/ri";
export default function Sidebar(){
    return(
        <div class="sidebar">
        <div className="row">
         <div className="col-3">
        
         </div>
         <div className="col-6">
            <h3>John</h3>
            <h5>John@gmail.com</h5>
         </div>
        </div>
        <div className="row "> 
        <div className="col-10">
        <ul>
            <li class="nav-link active homecls">
                <GoHome size={30}/>
                    <p class="paracls">Home</p>
                            </li>
                            <li class="nav-link">
                            <IoSearchSharp size={30}/>
                                <p class="paracls">Search</p>
                            </li>
                            <li class="nav-link">
                            < MdOutlineTaskAlt size={30}/>
                                <p class="paracls">Notes</p>
                            </li>
                            <li class="nav-link">
                            <MdOutlineTaskAlt size={30}/>
                                <p class="paracls">Tasks</p>
                            </li>
                            <li class="nav-link">
                            < RiInboxArchiveLine size={30}/>
                                <p class="paracls">Archive</p>
                            </li>
                            <li class="nav-link">
                            < RiDeleteBin6Line size={30}/>  
                            <p class="paracls">Bin</p>
                            </li>
                        </ul>
        </div>
        </div>
</div>
    )
}