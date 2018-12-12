var React = require('react');
var style = require ('../styles/index.css');




class Scroll extends React.Component {
  render() {

    return (
      <div className={style.scroll}>
        <a href='#theResume'>
          <i class="material-icons">
            expand_more
          </i>
        </a>
      </div>
    )
  }
}

module.exports = Scroll;