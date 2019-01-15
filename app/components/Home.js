import React from 'react';
import AboutMe from './aboutMe';
import Scroll from './scroll';
import TheResume from './theResume';
import { topMain, middleMain } from '../styles/index.css';




class Home extends React.Component {
  render() {

    return (
      <div>
        <div className={topMain}>
          <AboutMe />
          <Scroll />
        </div>
        <div className={middleMain}>
          <TheResume />
        </div>
      </div>
    )
  }
}

export default Home;
