import React from 'react';
import './Navbar.css';
import getMore from '../../image/Group 20.png'

const Navbar = () => {
    return (
        <div className="Navbar">
            <nav class="navbar navbar-expand-lg navbar-light  pt-5">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav float">
                            <li class="nav-item">
                                <a class="" aria-current="page" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="" aria-current="page" href="#">Team</a>
                            </li>
                            <li class="nav-item">
                                <a class="" aria-current="page" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="" aria-current="page" href="#">Issues</a>
                            </li>
                            <li class="nav-item">
                                <a class="" aria-current="page" href="#">Sign In</a>
                            </li>
                            <li class="nav-item row" style={{width:'30%'}}>
                                <input className="col-10" placeholder="Get more" type="search" name="" id="" />
                            </li>
                            {/* <li class="nav-item " style={{width:'30%'}}>
                                <a class="" aria-current="page" href="#"><img className="" src={getMore} alt="" /></a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;