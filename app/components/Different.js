var React = require('react');
var style = require ('../styles/index.css');
var Linkify = require('react-linkify');


class Different extends React.Component {
  render() {
  console.log(this.props)

    return (
      <div className={style.resume}>
        <h3 className={style.pDifferent}>What makes me different:</h3>
        <ul>
          <li>
            Proven ability to work independently.
          </li>
          <li>
            Excel at multi-tasking many projects at once after years of working as a project manager.
          </li>
          <li>
            Proficient in the Adobe Design Suite, with a background in Multimedia.
          </li> 
          <li>
            Obsessed with UX (read my blog about it <a href="http://bit.ly/makingACaseForUX">here.</a>)
          </li>
          <li>
            Proficient in CSS (SASS/SCSS, and LESS too).
          </li>  
          <li>
            Proficient in JavaScript.
          </li> 
          <li>
            Familiar with semantic markup & accessible design and when to / when not to use ARIA.
          </li> 
          <li>
            Freelance designer & fine arts oil painter.
          </li> 
        </ul>
      </div>
    )
  }
}

module.exports = Different;


  