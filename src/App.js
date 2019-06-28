import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './components/Home/Home';
import {About} from './components/About/About';
import {Contact} from './components/Contact/Contact';
import {NoMatch} from './components/NoMatch';
import { Layout } from './components/Layout';
import {NavigationBar} from './components/NavigationBar/NavigationBar';



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
          <Router>
            <Switch>
              <Route exact path="/"  component={Home} />
              <Route path="/"  component={About} />
              <Route path="/"  component={Contact} />
              <Route path="/" component={NoMatch} />
            </Switch>
          </Router>
      </React.Fragment>
    );
  }
}


export default App;
