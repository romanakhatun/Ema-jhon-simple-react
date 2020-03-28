import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Review from './component/reveiw/Review';
import Invetory from './component/invetory/Invetory';
import Notfound from './component/notfound/Notfound';
import PDetails from './component/ProductDetails/PDetails';
import Login from './component/Login/Login';
import { AuthContextProvider, PrivateRoute } from './component/Login/useAuth';
import Shipment from './component/Shipment/Shipment';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Header />
        <Router>
          <Switch>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route exact path="/">
              <Shop />
            </Route>

            <Route path="/review">
              <Review></Review>
            </Route>

            <Route path="/product/:productkey">
              <PDetails />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <PrivateRoute path="/shipment">
              <Shipment />
            </PrivateRoute>

            <Route path="*">
              <Notfound />
            </Route>

          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
