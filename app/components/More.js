var React = require('react');
var style = require ('../styles/index.css');
var Link = require('react-router-dom').Link

class More extends React.Component {
  render() {

    return (
        <div className={style.topMain}>
          <div className={style.topContent}>
          MORE
          </div>
        </div>
    )
  }
}

module.exports = More;