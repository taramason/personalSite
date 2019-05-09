import React from 'react';
import { topMain, topContent } from './contactStyles.css';

class Contact extends React.Component {
  render() {
    return (
      <div className={topMain}>
        <div className={topContent}>
          <p>Currently open to new opportunities! Lets chat.</p>
          <a href="mailto:tara.mason@gmail.com" target="_blank">tara.mason@gmail.com</a>
        </div>
      </div>
    )
  }
}

export default Contact;