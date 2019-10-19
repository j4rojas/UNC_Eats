import React from 'react';

import './Address.css';

export default function Address(props) {
    return (
        <div className="Address">
            {props.text}
        </div>
    );
}

Address.defaultProps = {
    text: ''
};