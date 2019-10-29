import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Location from '../Location/Location';
import LoginForm from '../Form/LoginForm';
import regForm from '../Form/regForm';
import resturantForm from '../Form/resturantForm';
import Start from '../Start/start';
import { Route, BrowserRouter as Router } from 'react-router-dom';

export default function App(props) {
  return (
      <Router>
          <div className="app">
              <Header></Header>
              <main>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/Location" component={Location} />
                  <Route exact path="/LoginForm" component={LoginForm}/>
                  <Route exact path="/regForm" component={regForm} />
                  <Route exact path="/resturantForm" component={resturantForm}/>
                  <Route exact path="/Start" component={Start}/>
              </main>
          </div>
      </Router>
  );
};
