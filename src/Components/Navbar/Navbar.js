import React, { Component } from 'react';
import './Navbar.css';

import logo from '../Images/logo_image.jpg'

class Navbar extends Component {
    render() {
        return (
            <div >
                <nav class="Navbar">
                <img src={logo}/>agri machinery
                <i class="fa fa-bars" id="bars"></i>
                <a class="home" href='/a'>Home</a>
                <a class="services" href='/a'>Services</a>
                <a class="about" href='/b'>About</a>
                <a class="contact" href='/c'>Contact</a>
                </nav>
            </div>
        );
    }
}

export default Navbar;


