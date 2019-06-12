import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Route,
  Link, Switch
} from 'react-router-dom';

import Home from './Home';
import About from './SideBar';
import Ranking from './Ranking'
import NewDuty from './NewDuty'
import Menubar from "./Navbar";

class App extends Component {
  render() {
    return (
        <Router>
          <Menubar/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/ranking" component={Ranking}/>
              <Route exact path="/duties" component={NewDuty}/>
              <Route path="/about" component={About}/>
            </Switch>


        </Router>
    );
  }
}

export default App;
