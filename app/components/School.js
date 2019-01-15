import React from 'react';
import { resume, educationH2, educationH3, eachPosition, date, position, technologies, schoolDescription } from '../styles/index.css';

class School extends React.Component {
  render() {
  console.log(this.props)

    return (
      <div className={resume}>
      <h2 class={educationH2}>Education</h2>
        {this.props.education.map(function(school, i){
            return (
              <div className={eachPosition}>
                <p key={school.date}className={date}>{school.date}</p>
                <h3 class={educationH3}>{school.schoolName}<span className={position}>{school.major}</span></h3>
                <p className={technologies}>{school.technologies}</p>
                <p className={schoolDescription}>{school.description}</p>

              </div>
            ) 
        })}
      </div>
    )
  }
}

export default School;


  