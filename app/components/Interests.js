import React from 'react';
import style from '../styles/index.css';

class Interests extends React.Component {
  render() {
  console.log(this.props)

    return (
      <div className={style.resume}>
      <h2>Interests</h2>
        {this.props.interests.map(function(interests, i){
            return (
              <div className={style.eachPosition}>
                <p className={style.schoolDescription}>{interests.description}</p>
              </div>
            ) 
        })}
      </div>
    )
  }
}

export default Interests;


  