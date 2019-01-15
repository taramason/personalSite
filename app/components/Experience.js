import React from 'react';
import { resume, resumeH2, resumeH3, eachPosition, date, position, technologies } from '../styles/index.css';


class Experience extends React.Component {
  render() {
  console.log(this.props)

    return (
      <div className={resume}>
      <h2 className={resumeH2}>Experience</h2>
 
        {this.props.jobs.map(function(job, i){
          return (
            <div className={eachPosition}>
              <p className={date}>{job.date}</p>
              <h3 className={resumeH3}>{job.company}<span className={position}>{job.position}</span></h3>
              <p className={technologies}>{job.technologies}</p>
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

export default Experience;


  