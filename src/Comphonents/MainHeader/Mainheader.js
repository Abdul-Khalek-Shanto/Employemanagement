import React from 'react';
import "./mainheader.css"
const Mainheader = () => {
    return (
        <div>
            <nav className="navcontainer">
                <a href="/Home">Home</a>
                <a href="/AddEmployee">Add Employee</a>
            </nav>
        </div>
    );
};

export default Mainheader;