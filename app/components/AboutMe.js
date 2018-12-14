var React = require('react');
var style = require ('../styles/index.css');




class AboutMe extends React.Component {
  render() {

    return (
      <div className={style.topContent}>
        <p>I am a design-obsessed, business-minded, simplicity-loving developer. I <i class="material-icons">favorite</i> building, fixing, and tweaking things until they reach their optimum state.</p>
        <p>In my former life I was an Interior Design Project Manager with a knack for graphic design. With a few years of Web Development under my belt, I now use a trained eye and natural empathy for the user to create refreshing interactive web-based experiences. Sometime in my career future, I would like to become a Product Manager.</p>
      </div>
    )
  }
}

module.exports = AboutMe;
