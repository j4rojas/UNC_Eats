import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Location from '../Location/Location';
import NewForm from '../Form/NewForm';
import RegForm from '../Form/regForm';


function App() {
  return (
    <div className="App">
      <Header/>
      
      <p class="landingPage">UNC Eats is for food enthusiasts. Find new cafes and resturants near campus.</p>
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
      <RegForm/>
      <NewForm/> 
    </div>
   
  );
}

export default App;



