import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';

import Login from './Components/Login/Login'
import PrivateRoute from './Components/Login/PrivateRoute'
import CustomerPlaceOrder from './Components/Dashboard/CustomerDashboard/CustomerPlaceOrder/CustomerPlaceOrder'
import Review from './Components/Dashboard/CustomerDashboard/Review/Review'
import ServiceList from './Components/Dashboard/CustomerDashboard/ServiceList/ServiceList'
import AdminServiceList from './Components/Dashboard/AdminDashboard/AdminServiceList/AdminServiceList'
import AdminAddService from './Components/Dashboard/AdminDashboard/AdminAddService/AdminAddService'
import MakeAdmin from './Components/Dashboard/AdminDashboard/MakeAdmin/MakeAdmin'

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <PrivateRoute path="/order/:id">
              <CustomerPlaceOrder></CustomerPlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/customer/review">
              <Review></Review>
            </PrivateRoute>
            <PrivateRoute path="/customer/services">
              <ServiceList></ServiceList>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/admin/add-service">
              <AdminAddService></AdminAddService>
            </PrivateRoute>
            <PrivateRoute path='/admin/make-admin'>
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute path="/admin/services">
              <AdminServiceList></AdminServiceList>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
    </UserContext.Provider>
  );
}

export default App;
