import React from 'react';
import Nav from './navigation/nav';
import Logo from './navigation/logo';
import Home from './homePg/aboutMe/home';
import More from './morePg/more';
import Projects from './homePg/projects/projects';
import Contact from './contactPg/contact';
import Footer from './footer/footer';
import Spacer from './spacer/spacer';
import Resume from './homePg/resume/theResume';

import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Logo />
          <Route exact path='/' component={Home} />
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
