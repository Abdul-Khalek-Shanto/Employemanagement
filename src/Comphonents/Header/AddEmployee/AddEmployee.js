import React from 'react';
import './addemployee.css';

const AddEmployee = () => {

    
    return (
      <div  className="formContainer">
          <h1>Add Employee</h1>
           <form className="MainForm">
           <div className="form-group">
               <label>First Name:</label>
               <input type="text" placeholder="Enter the first name"/>
           </div>
           <div className="form-group">
               <label >Last Name</label>
               <input type="text" placeholder="Enter the first name"/>

           </div>
           <div className="form-group">
               <label>Email:</label>
               <input type="text" placeholder="Enter your email"/>
           </div>
            <button className="savebtn">Save</button>
            <button className="cancebtn">Cancel</button>
       </form>
      </div>
    
    );
};

export default AddEmployee;