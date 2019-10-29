import React from 'react';

import './Comment.css';

export default function Comment(props) {
    return (
        <div className="Comment">
            {props.text}
        </div>
    );
}

Comment.defaultProps = {
    text: ''
};
