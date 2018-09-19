var React = require('react');
var Top = require('./top');
var Img = require('./img');
var BtmHalf = require('./btmHalf');
var style = require ('../styles/index.css');




class App extends React.Component {
  render() {
    const greeting = {
      subject: 'React',
      description: 'Your component library for ...',
    };

    return (
      <div className={style.main}>
        <Top />
        <Img />
        <BtmHalf />
      </div>
    )
  }
}

module.exports = App;
