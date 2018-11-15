var React = require('react');
var style = require ('../styles/index.css');




class Logo extends React.Component {
  render() {

    return (
      <div className={style.logoDiv}>
        <a href="">
          <span className={style.logoFirst}>Tara</span>
          <span className={style.logoLast}>Mason</span>
        </a>
      </div> 
    )
  }
}

module.exports = Logo;
