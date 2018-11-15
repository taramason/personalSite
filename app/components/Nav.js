var React = require('react');
var style = require ('../styles/index.css');




class Nav extends React.Component {
  render() {

    return (
      <div className={style.navBar}>
      	<nav className={style.nav}>
      		<a href="" className={style.navItem}>about</a>
      		<a href="" className={style.navItem}>contact</a>
      	</nav>
      </div>
    )
  }
}

module.exports = Nav;
