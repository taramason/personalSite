import React from 'react';
import style from '../navigation/navStyles.css';
import { NavLink, Link, BrowserRouter as Router, Route } from 'react-router-dom'



class Nav extends React.Component {
  render() {
    return (
      <div className={style.main}>
        <div className={style.navBar}>
        	<div className={style.nav}>
            <NavLink exact activeClassName='active' to='/' className={style.navItem}>home</NavLink>
        		<a href="#projects" className={style.navItem}>projects</a>
        		<NavLink activeClassName='active' to='/contact' className={style.navItem}>contact</NavLink>

        	</div>
        </div>
      </div>
    )
  }
}

export default Nav;
