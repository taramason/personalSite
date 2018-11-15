var React = require('react');
var style = require ('../styles/index.css');




class Scroll extends React.Component {
  render() {

    return (
      <div className={style.scroll}>
        <i class="material-icons">
          expand_more
        </i>
      </div>
    )
  }
}

module.exports = Scroll;