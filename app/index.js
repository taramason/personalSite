var React = require ('react');
var ReactDOM = require ('react-dom');
var PropTypes = require ('prop-types');
var App = require('./components/App');

require ('./styles/index.css');


ReactDOM.render (
  <App />,
  document.getElementById('app')
)
