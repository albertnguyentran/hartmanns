import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/index';
import SigninPage from './pages/signin'
import CareersPage from './pages/careers'
import ProjectsPage from './pages/projects'

function App() {
  return (
    <Router>
      
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/careers" component={CareersPage} exact/>
        <Route path="/projects" component={ProjectsPage} exact/>
      </Switch>
    </Router>
  )
}

export default App;
