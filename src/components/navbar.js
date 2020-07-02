import React from 'react';
import { Link } from 'react-router-dom';

function Navbar ({ pageNav }) {
    console.log(window.scrollY);
    return (
        <nav className={pageNav ? "navbar nav-flow":"navbar nav-top"}>
            <p className="nav-Title">Alexander Lee</p>
            <a href=""></a>
            <a href="../assets/ALEX_LEE_III_FS0403.pdf" download>Resume</a>
        </nav>
    )
}

export default Navbar;