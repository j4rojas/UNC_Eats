import React from 'react';

import './Address.css';

export default function Address() {
    const text = "1234 Main St CA, 12345";
    return (
        <div className="Address">
            {text}
        </div>
    );
};