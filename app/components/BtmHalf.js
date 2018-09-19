var React = require('react');
var style = require('../styles/index.css');
var Blurb = require('./blurb');
var StylesUsed = require('./StylesUsed');
var Deets = require('./deets');



class BtmHalf extends React.Component {
  render() {
    return (
      <div className={style.BtmDiv}>
        <div className={style.LtBtm}>
          <Blurb />
          <StylesUsed />
        </div>
        <Deets />
      </div>
    )
  }
};

module.exports = BtmHalf;
