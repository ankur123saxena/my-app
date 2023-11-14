// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import CustomerList from './components/CustomerList';
import CustomerDetail from './components/CustomerDetail';
import OrderList from './components/OrderList';
import OrderDetail from './components/OrderDetail';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/products" exact component={ProductList} />
          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/customers" exact component={CustomerList} />
          <Route path="/customers/:id" component={CustomerDetail} />
          <Route path="/orders" exact component={OrderList} />
          <Route path="/orders/:id" component={OrderDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
