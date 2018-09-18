var React = require ('react');
var ReactDOM = require ('react-dom');
var PropTypes = require ('prop-types');
var App = require('./components/App');

require ('./styles/index.css');


//what component needs:
//UI (almost always)
//state
//lifecycle events


 //using a component class because IRL I'm assuming this page would (as opposed to a stateless functional component, which is what I wanted to use initially)


ReactDOM.render(
  <App />,
  document.getElementById('app')
)
