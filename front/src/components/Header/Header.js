import React from 'react';
import './Header.css';
import Logo from '../../Assets/Images/oldWell.png';
import Unc from '../../Assets/Images/unc.jpeg';


export default function Header() {
    return(
        <header className ="header">
            <img src={Unc} class="Unc"/>
            <img src={Logo} class="logo"/>
            <p class="title">UNC Eats</p> 
            <button type="button" class="loginBtn">Login</button>
        </header>
    )
}
