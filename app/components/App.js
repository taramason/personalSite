var React = require('react');
var Top = require('./top');
var style = require ('../styles/index.css');


class App extends React.Component {
  render() {
    return (
      <div className={style.main}>
        <Top />
      </div>
    )
  }
}

module.exports = App;
