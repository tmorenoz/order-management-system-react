import React from 'react';
//import logo from './logo.svg';
//import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import Orders from './components/Orders';
import Products from './components/Products';
import NewOrder from './components/NewOrder'


function App() {
  return (
    <Router>
        <div className="container mt-5">
        
          <div className="btn-group">
            <h3>BLAZE</h3>
            <Link to="/" className="btn">Orders</Link>
            <NavLink to="/products" className="btn " activeClassName="active">Products</NavLink>
          </div>
          <hr></hr>
          <Switch>
          <Route path="/" exact>
            <Orders />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/newOrder">
            <NewOrder/>
          </Route>
        </Switch>
        </div>
    </Router>
  );
}

export default App;
