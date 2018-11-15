var React = require('react');
var TopHalf = require('./topHalf');
var TheMiddle = require('./theMiddle')




var style = require ('../styles/index.css');




class App extends React.Component {
  render() {

    return (
      <div >
      <TopHalf />
      <TheMiddle />
      </div>
    )
  }
}

module.exports = App;
