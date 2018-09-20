var React = require('react');
var style = require ('../styles/index.css');


class Deets extends React.Component {
  render() {
    return (
      <div className={style.RtBtm}>
        <dl className={style.clientStyleDeets}>
          <dt>Client Name</dt>
          <dd>{this.props.propData.clientName}</dd>
          <dt>Client Location</dt>
          <dd>{this.props.propData.clientLocation}</dd>
          <dt>Designer Name</dt>
          <dd>{this.props.propData.designerName}</dd>
          <dt>Designer Location</dt>
          <dd>{this.props.propData.designerLocation}</dd>
          <dt>Timeline</dt>
          <dd>{this.props.propData.timeline}</dd>
          <dt>Budget</dt>
          <dd>{this.props.propData.budget}</dd>
        </dl>
      </div>
    )
  }
};

module.exports = Deets;
