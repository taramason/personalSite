import React from 'react';
import style from '../styles/index.css';
import { NavLink } from 'react-router-dom'



class Nav extends React.Component {
  render() {
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
}

export default Nav;
