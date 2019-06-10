import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link, Switch
} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Ranking from './Ranking'
import Menubar from "./Navbar";

class App extends Component {
  render() {
    return (
        <Router>
          <Menubar/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/ranking" component={Ranking}/>
              <Route path="/about" component={About}/>
            </Switch>


        </Router>
    );
  }
}

export default App;