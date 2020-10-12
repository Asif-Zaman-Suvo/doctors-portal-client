import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Booking from './Components/AppoinmentBook/Booking/Booking';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AddDoctor from './Components/AddDoctor/AddDoctor';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({

    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    message: '',

  })

  return (

    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>

        </Route>

        <Route path="/appointmentBook">
          <Booking></Booking>

        </Route>

        <Route path="/dashboard">
          <Dashboard></Dashboard>

        </Route>

        <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>

        <Route path="/login">
          <Login></Login>

        </Route>

      </Switch>
      
    </Router>
    </UserContext.Provider>
  );
}

export default App;
