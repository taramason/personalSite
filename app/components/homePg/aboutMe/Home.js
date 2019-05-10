import React from 'react';
import AboutMe from './aboutMe';
import Scroll from './scroll';
import Resume from '../resume/theResume';
import Projects from '../projects/projects';
import FooterGrey from '../../footer/FooterGrey';

class Home extends React.Component {
  render() {

    return (
      <div>
        <AboutMe />
        <Scroll />
        <Resume />
        <Projects />
        <FooterGrey />
      </div>
    )
  }
}

export default Home;
