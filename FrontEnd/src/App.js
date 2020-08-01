import React from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
// import Users from './user/pages/Users';
// import NewPlace from './places/pages/NewPlace';

import WelcomePage from '../src/pages/Welcome'
const App=()=> {
  return (
  <Router>
    <Switch>
    <Route path='/' exact>
      <WelcomePage />
    </Route>
    {/* <Route path='/place/new' exact>
      <NewPlace />
    </Route> */}
    <Redirect to ='/' />
    </Switch>
  </Router>
    
  )

}

export default App;
