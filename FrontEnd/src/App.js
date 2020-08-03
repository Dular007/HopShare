import React ,{useState,useCallback} from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
// import Users from './user/pages/Users';
// import NewPlace from './places/pages/NewPlace';
import {AuthContext} from '../src/shared/components/Context/auth-context';

import WelcomePage from '../src/pages/Welcome'
import SignUp from './components/SignUp';
const App=()=> {

  const [isLoggedIn, setIsLoggedIn] =useState(false);
  const login = useCallback (()=>{
     setIsLoggedIn(true);
  
  },[]);
  const logout = useCallback (()=>{
     setIsLoggedIn(false);
     
  },[]);

  return (
    <AuthContext.Provider value=
    {{isLoggedIn: isLoggedIn,login: login, logout: logout}}>
  <Router>
    <Switch>
    <Route path='/' exact>
      <WelcomePage />
    {/* </Route>
    <Route path='/signup' exact>
      <SignUp /> */}
    </Route>
    {/* <Route path='/place/new' exact>
      <NewPlace />
    </Route> */}
    <Redirect to ='/' />
    </Switch>
  </Router>
  </AuthContext.Provider>
    
  )

}

export default App;
