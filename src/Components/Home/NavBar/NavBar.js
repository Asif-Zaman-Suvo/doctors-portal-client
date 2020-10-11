import React from 'react';

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
           

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link mr-5 text-dark" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5 text-dark" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5 text-dark" href="#">Dental Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5 text-white" href="#">Reviews</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5 text-white" href="#">Blogs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5 text-white" href="#">Contact Us</a>
                    </li>
                     
                    
                </ul>

            </div>
        </nav>
    );
};

export default NavBar;