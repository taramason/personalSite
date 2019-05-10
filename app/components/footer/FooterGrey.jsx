import React from 'react';
import {footerDivGrey} from './footerStyles.css';

class FooterGrey extends React.Component {
  render(){
    return (
      <div className={footerDivGrey}>
        <p>Copyright 2019 Tara Creative</p>
      </div>
    )
  }
}

export default FooterGrey;