var React = require('react');
var style = require ('../styles/index.css');

var _ = require('lodash')


class CodeChallenge extends React.Component {
  render() {
    return (
      <p>your lucky number is {_.random(100)}!</p>
    )
  }
};

  module.exports = CodeChallenge;
