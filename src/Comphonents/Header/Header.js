import React from 'react';
import './Header.css'

const Header = () => {
    
    return (
        <div className="employee-container">
          
        
            <h1>Employees List</h1>
            
         <nav>
             <a id="addemployee" href="/AddEmployee">AddEmployee</a>
         </nav>
            <ul>
                <li><a href="#">FirstName</a></li>
                <li><a href="#">LastName</a></li>
                <li><a href="#">Email</a></li>
                <li><a href="#">Action</a></li>
            </ul>
            </div>
        
    );
};

export default Header;