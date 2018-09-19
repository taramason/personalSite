var React = require('react');
var style = require ('../styles/index.css');


class StylesUsed extends React.Component {
  render() {
    return (
      <div className={style.stylesDiv}>
        <ul className={style.stylesList}>
          <li>stuff</li>
          <li>stuff</li>
          <li>stuff</li>
          <li>stuff</li>
        </ul>
      </div>
    )
  }
};

module.exports = StylesUsed;
