var React = require('react');
var style = require('../styles/index.css');
var Blurb = require('./blurb');
var StylesUsed = require('./StylesUsed');
var Deets = require('./deets');



class BtmHalf extends React.Component {
  render() {
    const propData = {
      stylesUsed: [
        "classic",
        "bohemian",
        "eclectic",
        "modern"
      ],
      clientName: "Faye J",
      clientLocation: "Chicago, IL",
      designerName: "Kylee T",
      designerLocation: "Denver, CO",
      timeline: "4 weeks",
      budget: "$6,000"
    };
    return (
      <div className={style.BtmDiv}>
        <div className={style.ltBtm}>
          <Blurb />
          <StylesUsed propData={propData}/>
        </div>
        <Deets propData={propData}/>
      </div>
    )
  }
};

module.exports = BtmHalf;
