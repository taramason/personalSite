import React from 'react';
import { topMain, topContent } from './contactStyles.css';

class Contact extends React.Component {
  render() {
    return (
      <div className={topMain}>
        <div className={topContent}>
          <p>Currently open to new opportunities! </p>
          <p>I would prefer to use my natural Front End talent to improve your product, in an Agile environment, using React or something similar.</p>
          <p>Lets chat.</p>
          <a href="mailto:tara.mason@gmail.com">tara.mason@gmail.com</a>
        </div>
      </div>
    )
  }
}

export default Contact;