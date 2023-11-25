import React from 'react';
import Card from '../Card/Card';
import '../Card/Card.css';
import './note.css'
export default function Note(){
    return(
        <>
        <div class="card note">
           <div class="card-body ">
            <div class="card-title">Add a Note</div>
            <p class="card-Text">Enter your Text</p>
           </div>
          </div>
          <h3>My Notes</h3>
          <p>Recently Viewed</p>
          <div class="row">
            <div class="col-3">
                <Card />
            </div>
            <div class="col-3">
                <Card />
            </div>
            <div class="col-3">
                <Card />
            </div>
            <div class="col-3">
                <Card />
            </div>
          </div>
        </> 
    )
}