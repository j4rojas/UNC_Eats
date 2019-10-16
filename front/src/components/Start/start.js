import React from 'react';
import Home from '../Home/Home';
import Button from 'react-bootstrap/Button';

export default function start() {
    return(
        <div className="start">
              <Home/>
              <Button className="addNew" href="/regForm">Add New</Button>
        </div>       
    );
}

