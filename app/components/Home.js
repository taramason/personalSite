var React = require('react');
var AboutMe = require('./aboutMe');
var Scroll = require('./scroll');
var TheResume = require('./theResume');
var Link = require('react-router-dom').Link;
var style = require ('../styles/index.css');




class Home extends React.Component {
  render() {

    return (
      <div>
        <div className={style.topMain}>
          <AboutMe />
          <Scroll />
        </div>
        <div className={style.middleMain}>
          <TheResume />
        </div>
      </div>
    )
  }
}

module.exports = Home;
