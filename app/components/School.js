var React = require('react');
var style = require ('../styles/index.css');

class School extends React.Component {
  render() {
  console.log(this.props)

    return (
      <div className={style.resume}>
      <h2>Education</h2>
        {this.props.education.map(function(school, i){
            return (
              <div className={style.eachPosition}>
                <p key={school.date}className={style.date}>{school.date}</p>
                <h3>{school.schoolName}<span className={style.position}>{school.major}</span></h3>
                <p className={style.technologies}>{school.technologies}</p>
                <p className={style.schoolDescription}>{school.description}</p>

              </div>
            ) 
        })}
      </div>
    )
  }
}

module.exports = School;


  