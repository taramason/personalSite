import React from 'react';
import {footerDiv} from '../styles/index.css';

class Footer extends React.Component {
  render(){
    return (
      <div className={footerDiv}>
        <p>Copyright 2019 Tara Creative</p>
      </div>
    )
  }
}

export default Footer;