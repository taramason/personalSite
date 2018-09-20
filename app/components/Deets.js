var React = require('react');
var style = require ('../styles/index.css');


class Deets extends React.Component {
  render() {
    return (
      <div className={style.rtBtm}>
        <dl className={style.clientStyleDeets}>
          <div>
            <div>
              <dt className={style.clientTitle}>Client Name</dt>
              <dd className={style.clientInfo}>{this.props.propData.clientName}</dd>
            </div>
            <div>
              <dt className={style.clientTitle}>Client Location</dt>
              <dd className={style.clientInfo}>{this.props.propData.clientLocation}</dd>
            </div>
            <div>
              <dt className={style.clientTitle}>Designer Name</dt>
              <dd className={style.clientInfo}>{this.props.propData.designerName}</dd>
            </div>
          </div>
          <div>
            <div>
              <dt className={style.clientTitle}>Designer Location</dt>
              <dd className={style.clientInfo}>{this.props.propData.designerLocation}</dd>
            </div>
            <div>
              <dt className={style.clientTitle}>Timeline</dt>
              <dd className={style.clientInfo}>{this.props.propData.timeline}</dd>
            </div>
            <div>
              <dt className={style.clientTitle}>Budget</dt>
              <dd className={style.clientInfo}>{this.props.propData.budget}</dd>
            </div>
          </div>
        </dl>
      </div>
    )
  }
};

module.exports = Deets;
