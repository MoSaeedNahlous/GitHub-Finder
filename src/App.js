import React from 'react';
import './App.css';
import Navbar from './components/layout/NavBar.js';
import Home from './components/Pages/Home';
import NotFound from './components/Pages/NotFound';
import Alert from './components/layout/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/Pages/About.js';
import User from './components/users/User.js';
import GithubState from './context/github/GithubState.js';
import AlertState from './context/alert/AlertState.js';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
