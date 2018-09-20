var React = require('react');
var style = require ('../styles/index.css');


class StylesUsed extends React.Component {
  render() {
    return (
      <div className={style.stylesDiv}>
        <h3>Styles Used:</h3>
        <ul className={style.stylesList}>
          {this.props.propData.stylesUsed.map(function(style) {
            return <div><li key={style}><i className="material-icons md-18">done</i>{style}</li></div>
          })}
        </ul>
      </div>
    )
  }
};

module.exports = StylesUsed;
