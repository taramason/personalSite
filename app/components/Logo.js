var React = require('react');
var style = require ('../styles/index.css');




class Logo extends React.Component {
  render() {

    return (
      <div className={style.topMain}>
        
          <a href="" className={style.logoFirst}>Tara</a>
          <a href="" className={style.logoLast}>Mason</a>
        
      </div> 
    )
  }
}

module.exports = Logo;
