import React from 'react';
import { resumeWhyDifferent, differentH1, ulDifferent, underlined, happyFace } from '../../index.css';
import Face from 'react-svg-loader!../../../assets/happyFace.svg';

class Different extends React.Component {
  render() {

    return (
      <div className={resumeWhyDifferent}>
        <h1 className={differentH1}>Why I'm different
        <Face width={30} height={30} className={happyFace}/>
        :</h1>
        <ul className={ulDifferent}>
          <li>
            I am proactive.
          </li>
          <li>?
            I play well with others.
          </li>
          <li>
            Worked as a project manager for years (mad juggling skills).
          </li>
          <li>
            I can design the UX as well as code it, independently.
          </li> 
          <li>
            Obsessed with the user (read my blog about it <a href="http://bit.ly/makingACaseForUX" class={underlined}>here</a>.)
          </li>
          <li>
            Proficient in JavaScript & Node.js.
          </li> 
          <li>
            Proficient in CSS (SASS/SCSS, and LESS too).
          </li>  
          <li>
            Familiar with semantic markup & accessible design.
          </li> 
        </ul>
      </div>
    )
  }
}

export default Different;


  