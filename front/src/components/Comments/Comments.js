import React from 'react';

import './Comments.css';

export default function Comments() {
    const text = "Example comment"; //need to replace with user comments 
    return (
        <div className="comment">
            {text}
        </div>
    );
};