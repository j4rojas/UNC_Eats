import React from 'react';
import './Home.css';
import UNC from '../../Assets/Images/unc.jpeg';
import Location from '../Location/Location';
import Button from 'react-bootstrap/Button';

export default function Home() {
    return(
        <div className="home-page">
            <img src={UNC} class="UNC"/>
            <Button className="loginBtn" href="/LoginForm">Sign In</Button>
            <ul className="locations">
                <li className="location-wrapper one">
                    <Location/>
                </li>
                <li className="location-wrapper">
                    <Location/>
                </li>
                <li className="location-wrapper">
                    <Location/>
                </li>
        </ul>
        </div>
    );
}


