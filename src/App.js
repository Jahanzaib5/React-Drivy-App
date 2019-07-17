import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './components/Home/Home';
import {About} from './components/About/About';
import {NoMatch} from './components/NoMatch/NoMatch';
import {NavigationBar} from './components/NavigationBar/NavigationBar';
import Mainly from './components/Home/BeforeFooter/Main';
import Footer from './components/Home/Footer/Footer';
import {Contact} from './components/Contact/Contact';
import {Drivers} from './components/Drivers/Drivers';



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
          <Router>
            <Switch>
              <Route exact path="/"  component={Home} />
              <Route path="/drivers"  component={Drivers} />
              <Route path="/about"  component={About} />
              <Route path="/contact"  component={Contact} />
              <Route path="/nomatch" component={NoMatch} />
            </Switch>
          </Router>
        <Mainly />
        <Footer />
      </React.Fragment>
    );
  }
}


export default App;
