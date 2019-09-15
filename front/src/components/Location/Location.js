import React from 'react';
import Comments from '../Comments/Comments';
import CafeImg from '../../Assets/Images/Friends_cafe.png';

export default function Location() {
    return (
        <div>
            <h3>Example Resturant</h3>
            <img src={CafeImg}/>
            <ul className="Location">
                <li>
                    <Comments/>
                </li>
                <li>
                    <Comments/>
                </li>
            </ul>
        </div>
    );
}

