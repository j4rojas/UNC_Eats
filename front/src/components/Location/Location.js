import React from 'react';
import Comments from '../Comments/Comments';
import Address from '../Address/Address';
import CafeImg from '../../Assets/Images/Friends_cafe.png';

export default function Location() {
    return (
        <div>
            <h3>Example Resturant</h3>
            <img src={CafeImg}/>
            <ul className="Location">
                <li>
                    <Address/>
                </li>
                <li>
                    <Comments/>
                </li>
            </ul>
        </div>
    );
}

//for location