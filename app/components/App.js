var React = require('react');
var Top = require('./top');
var Img = require('./img');
var BtmHalf = require('./btmHalf');

var style = require ('../styles/index.css');

const data = {
  stylesUsed: [ "classic", "bohemian", "eclectic", "modern" ],
  clientName: "Faye J",
  clientLocation: "Chicago, IL",
  designerName: "Kylee T",
  designerLocation: "Denver, CO",
  timeline: "4 weeks",
  budget: "$6,000"
};


class App extends React.Component {
  render() {
    return (
      <div className={style.main}>
        <Top />
        <Img />
        <BtmHalf />
      </div>
    )
  }
}

module.exports = App;
