import React from 'react';
import { Link } from 'react-router-dom';
import pdf from '../assets/ALEX_LEE_III_FS0403.pdf';

function Navbar ({ pageNav }) {
    // console.log(window.scrollY);
    return (
        <nav className={pageNav ? "navbar nav-flow":"navbar nav-top"}>
            <p className="nav-Title">Alexander H. Lee III</p>
                <a href="https://www.linkedin.com/in/alexander-lee-3abb1546/">LinkedIn</a>
                <a href='https://github.com/lobo89x'>Git Hub</a>
                <a href={pdf}>Resume</a>
            <div>
            </div>
        </nav>
    )
}

export default Navbar;