import React from 'react';
import 'regenerator-runtime/runtime';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Orders } from './components/order/Orders';
import { Login } from './components/Login';
import './App.css';

import useToken from './context/useToken';
import Navbar from './components/navbar/Navbar';



const App = () => {
  
const {token, setToken, removeToken}  = useToken();

  
  if(!token) {
    return (
         <Login setToken={setToken} />
    )
  }
  const logout = () => {
    removeToken();
  }

  return (
    <div className="wrapper">
    {/*<img src={logo} className="App-logo" alt="logo" />*/}
    <BrowserRouter>
      <Navbar logout={logout}/>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
   
  );
}

export default App;
