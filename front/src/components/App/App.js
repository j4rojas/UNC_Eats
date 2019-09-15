import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Location from '../Location/Location';

function App() {
  return (
    <div className="App">
      <Header/>
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
      <Footer/>
    </div>
  );
}

export default App;
