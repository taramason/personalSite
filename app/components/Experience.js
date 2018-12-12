var React = require('react');
var style = require ('../styles/index.css');
var Linkify = require('react-linkify');


class Experience extends React.Component {
  render() {
  console.log(this.props)

    return (
      <div className={style.resume}>
      <h2>Experience</h2>
 
        {this.props.jobs.map(function(job, i){
            return (
              <div className={style.eachPosition}>
                <p className={style.date}>{job.date}</p>
                <h3>{job.company}<span className={style.position}>{job.position}</span></h3>
                <p className={style.technologies}>{job.technologies}</p>
                <p>{job.dailyDuties}</p>
                <ul>
                  {job.keyAccomplishments.map(function(duty) {
                    return  ( <li>{duty}</li> )
                  })}
                </ul>
              </div>
            ) 
        })}
      </div>
    )
  }
}

module.exports = Experience;


  