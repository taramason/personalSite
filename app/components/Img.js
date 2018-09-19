var React = require('react');
var style = require ('../styles/index.css');


class Img extends React.Component {
  render() {
    return (
      <div className={style.imgContainer}>
        <img className={style.roomImg} src="../app/styles/Bitmap.png" alt=""/>
      </div>
    )
  }
};

module.exports = Img;
