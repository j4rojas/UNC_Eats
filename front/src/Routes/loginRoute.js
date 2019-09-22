//include all paths

//<Route path="/" 
//route to components 
import React from 'react';
import { Route, IndexRoute } from 'react-router';
/**
 * Import all page components here
 */
import App from './components/App';
import NewForm from '../Form/NewForm';
import RegForm from '../Form/regForm';
/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={NewForm} />
    <Route path="/form/reg" component={RegForm} />
    <Route path="/some/otherpage" component={SomeOtherPage} />
  </Route>
);

