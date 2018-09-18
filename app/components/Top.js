var React = require('react');
var style = require ('../styles/index.css');


class Top extends React.Component {
  render() {
    return (
      <div className={style.headerContainer}>
        <h1 className={style.headerH1Top}>Case Study</h1>
        <h2 className={style.headerH2Top}>Fayes Classic Eclectic Living Room</h2>
      </div>
    )
  }
};

module.exports = Top;
