var React = require('react');
var style = require ('../styles/index.css');

class Contact extends React.Component {
  render() {

    return (
      <div className={style.topMain}>
        <div className={style.topContent}>
          <p>Currently open to new opportunities! Lets chat.</p>
          <a href="mailto:tara.mason@gmail.com">tara.mason@gmail.com</a>
        </div>
      </div>
    )
  }
}

module.exports = Contact;