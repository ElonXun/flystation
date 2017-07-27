import React from 'react';
import { Router, Route } from 'dva/router';
import Homepage from './routes/Homepage/Homepage';
import Products from './routes/Products';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Homepage} />
      <Route path="/products" component={Products} />
    </Router>
  );
}

export default RouterConfig;
