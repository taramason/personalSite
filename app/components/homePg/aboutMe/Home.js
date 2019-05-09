import React from 'react';
import AboutMe from './aboutMe';
import Scroll from './scroll';
import Resume from '../resume/theResume';
import Projects from '../projects/projects';

import { topMain } from './aboutMeStyles.css';




class Home extends React.Component {
  render() {

    return (
      <div>
        
        <div>
          <AboutMe />
          <Scroll />
          <Resume />
          <Projects />
        </div>

      </div>
    )
  }
}

export default Home;
