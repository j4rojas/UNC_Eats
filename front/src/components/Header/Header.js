import React from 'react';
import './Header.css';
import Logo from '../../Assets/Images/oldWell.png';

export default function Header() {
    return(
        <div>
            <h1 className="header">UNC Eats</h1>
            <img src ={Logo} className="Logo"/>
        </div>
    );
}