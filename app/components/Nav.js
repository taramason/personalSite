var React = require('react');
var style = require ('../styles/index.css');
var Logo = require('./logo');
var More = require('./more');
var More = require('./projects');

var Contact = require('./contact');

var Link = require('react-router-dom').Link; //for a button
var NavLink = require('react-router-dom').NavLink;




  function Nav () {

    return (
      <div className={style.main}>
        <div className={style.navBar}>
        	<div className={style.nav}>
            <NavLink exact activeClassName='active' to='/' className={style.navItem}>
              home
            </NavLink>
        		<NavLink activeClassName='active' to='/more' className={style.navItem}>
              more
            </NavLink>
            <NavLink activeClassName='active' to='/projects' className={style.navItem}>
              projects
            </NavLink>
        		<NavLink activeClassName='active' to='/contact' className={style.navItem}>
              contact
            </NavLink>
        	</div>
        </div>
      </div>
    )
  
}

module.exports = Nav;
