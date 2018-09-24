var React = require('react');
var style = require ('../styles/index.css');


class Blurb extends React.Component {
  render() {
    const blurbText = "This is a small intro blurb that gives you just a bit of insight into Faye’s project.  Should you decide to read more, then you scroll down to get the info."
    return (
      <div className={style.blurbText}>
        <p>{blurbText}</p>
      </div>
    )
  }
};

module.exports = Blurb;
