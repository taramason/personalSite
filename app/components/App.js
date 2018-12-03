var React = require('react');
var style = require ('../styles/index.css');
var Nav = require('./nav');
var Home = require('./home');
var More = require('./more');
var Contact = require('./contact');
var TheResume = require('./theResume');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;




class App extends React.Component {
  render() {

    return (
      <Router>
        <div>
          <Nav />
          <Route exact path='/' component={Home} />  
          <Route path='/more' component={More} />
          <Route path='/contact' component={Contact} />
        </div>
      </Router>
    )
  }
}

module.exports = App;
