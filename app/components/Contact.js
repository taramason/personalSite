import React from 'react';
import { topMain, topContent } from '../styles/index.css';

class Contact extends React.Component {
  render() {
    return (
      <div className={topMain}>
        <div className={topContent}>
          <p>Currently open to new opportunities! Lets chat.</p>
          <a href="mailto:tara.mason@gmail.com">tara.mason@gmail.com</a>
        </div>
      </div>
    )
  }
}

export default Contact;