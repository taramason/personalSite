var React = require('react');
var style = require ('../styles/index.css');




class AboutMe extends React.Component {
  render() {

    return (
      <div className={style.topContent}>
        <p>I am a design-obsessed, simplicity-loving software developer. I <i class="material-icons">favorite</i> building things, fixing things, and tweaking them until they look amazing.</p>
        <p>In my former life I was an Interior Designer and artist with a knack for graphic design. Now I use a trained eye and natural empathy for the user to build refreshing interactive web-based experiences.</p>
      </div>
    )
  }
}

module.exports = AboutMe;
