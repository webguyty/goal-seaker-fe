import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import About from './components/pages/About';
import EvalGoals from './components/pages/EvalGoals';
import PrivateRoute from './components/routing/PrivateRoute';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './main.scss';

import AuthState from './context/auth/AuthState';
import GoalsState from './context/goals/GoalsState';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  // Comment

  return (
    <AuthState>
      <GoalsState>
        <Router>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/about' component={About} />
              <PrivateRoute exact path='/evaluateGoals' component={EvalGoals} />
              <Redirect from='*' to='/' />
            </Switch>
          </Fragment>
        </Router>
      </GoalsState>
    </AuthState>
  );
};

export default App;
