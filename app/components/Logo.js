import React from 'react';
import { topLogo, logoHover, logoFirst, logoLast } from '../styles/index.css';

class Logo extends React.Component {
  render() {

    return (
      <div className={topLogo}>
        <div className={logoHover}>
          <a href="" className={logoFirst}>Tara</a>
          <a href="" className={logoLast}>Mason</a>
        </div>
      </div> 
    )
  }
}

export default Logo;
