var React = require('react');
var Top = require('./top');
var Img = require('./img');
var BtmHalf = require('./btmHalf');
var CodeChallenge = require('./codeChallenge');
var style = require ('../styles/index.css');




class App extends React.Component {
  render() {

    return (
      <div className={style.main}>
        <Top />
        <Img />
        <BtmHalf />
        <CodeChallenge />
      </div>
    )
  }
}

module.exports = App;
