import React from 'react';
import {footerDivWhite} from './footerStyles.css';

class FooterWhite extends React.Component {
  render(){
    return (
      <div className={footerDivWhite}>
        <p>Copyright 2019 Tara Creative</p>
      </div>
    )
  }
}

export default FooterWhite;