import React ,{ Component } from "react";
import { ReactDOM } from "react";
import "../src/Cont.css";



function Contact() {
    return (
        <>
        <div className="container">
        <div className="title">
        <h1>Customer Details</h1>
        <button className="button">Edit</button>
        </div>

        <div className="details">
        
        <div className="sub">
        <label>
             Name <br></br>
                <input type="text" name="name" />
        </label>

        </div>
        
        <div className="sub">
        <label>
        Address <br></br>
        <textarea rows="4" cols="35" name="comment" form="usrform">
        </textarea>
        </label>
        </div>

        <div className="sub">
        <label>
        Telephone <br></br>
           <input type="number" name="name" className="tel"/>
        </label>
        </div>

        <div className="sub">
        <label>
        Date of Birth <br></br>
           <input type="date" name="name" className="tel"/>
        </label>
        </div>

        <div className="sub">
        <label>
        Email Address <br></br>
           <input type="Email" name="name" className="tel"/>
        </label>
        </ div>

        <div className="sub">
        <label>
        Alt Telephone Number <br></br>
           <input type="number" name="name" className="tel"/>
        </label>
        </div>

   
        </div>
        
       
      
        </div>
        </>
        
    );
}
 
export default Contact;