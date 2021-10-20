import logo from './logo.svg';
import React from 'react';
import 'regenerator-runtime/runtime';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Orders } from './components/Orders';
import { Login } from './components/Login';
import './App.css';

import useToken from './context/useToken';



const App = () => {
  
const {token, setToken}  = useToken();

  
  if(!token) {
    return <Login setToken={setToken} />
  }


  return (
    <div className="wrapper">
    <h1>Application</h1>
    <img src={logo} className="App-logo" alt="logo" />
    <BrowserRouter>
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
 /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
export default App;
