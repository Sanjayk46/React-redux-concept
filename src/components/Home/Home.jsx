import React from "react";
import Card from "../Card/Card";
import './home.css'
export default function Home(){
    return(
        <>
        <h1>Welcome John</h1>
          <p>My Notes</p>
          <p>Recently Viewd</p>
          <div className="row">
             <div className="col-4">
               <Card />
             </div>
             <br/>
             <div className="col-4">
               <Card />
             </div>
             <div className="col-4">
               <Card/>
             </div>
          </div>
        </> 
        
    )
}