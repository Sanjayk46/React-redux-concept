import React from "react";
import Card from "react-bootstrap/Card";

    
// }
export default function Login(){
    return( 
        <Card style={{width:"50%",marginTop:"50px",marginLeft:"100px"}}>
     <Card.Body style={{textAlign:"center"}}>
        
        <p className="">UserName</p><input type="text" placeholder="UserName" />
        <p className="">UserEmail</p>
        <input type="email" placeholder="UserEmail" />
        <p className="">password</p>
        <input type="" placeholder="Password" />
        <br/>
        <button className="buttoncls" style={{marginTop:"20px"}}>Login</button>
     </Card.Body>
        </Card>
    )
}