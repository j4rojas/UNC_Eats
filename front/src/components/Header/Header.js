import React from 'react';
import './Header.css';
import Logo from '../../Assets/Images/oldWell.png';


export default function Header() {
    return(
        <header className ="header">
            <h1>UNC Eats</h1>
            <button type="button">Sign in</button>
            <img src={Logo} class="logo"/>
        </header>
    )
}