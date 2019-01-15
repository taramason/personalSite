import React from 'react';
import Nav from './nav';
import Logo from './logo';
import Home from './home';
import More from './more';
import Projects from './projects';
import Contact from './contact';
import Footer from './footer';
import Spacer from './spacer';

import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Logo />
          <Route exact path='/' component={Home} />
          <Route path='/more' component={More} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
          <Spacer />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
