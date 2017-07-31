import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import Homepage from './routes/Homepage/Homepage';
import Products from './routes/Products';
import Roots from './roots';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Roots} >
        <IndexRoute component={Homepage} />
        <Route path="blog/:blogType" component={Homepage} />
      </Route>
      <Route path="/products" component={Products} />
    </Router>
  );
}

export default RouterConfig;
