import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Grupo1 from './container/Grupo1'
import Grupo2 from './container/Grupo2'
import Grupo3 from './container/Grupo3'
import Home from './container/Home'
ReactDOM.render(

  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/grupo1' component={Grupo1} />
      <Route path='/grupo2' component={Grupo2} />
      <Route path='/grupo3' component={Grupo3} />
    </Route>



  </Router>,
  document.getElementById('root'));


reportWebVitals();
