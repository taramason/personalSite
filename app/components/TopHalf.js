var React = require('react');
var Nav = require('./nav');
var Logo = require('./logo');
var AboutMe = require('./aboutMe');
var Scroll = require('./scroll');



var style = require ('../styles/index.css');




class TopHalf extends React.Component {
  render() {

    return (
      <div className={style.main}>
      <Nav />
      <Logo />
      <AboutMe />
      <Scroll />
      </div>
    )
  }
}

module.exports = TopHalf;
