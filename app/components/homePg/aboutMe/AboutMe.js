import React from 'react';
import styles from './aboutMeStyles.css';
import Heart from 'react-svg-loader!../../../assets/favorite.svg';




class AboutMe extends React.Component {
  render() {

    return (
      <div className={styles.middle}>
        <div className={styles.alignRt}>
          <p>I am a design-obsessed, business-minded, simplicity-loving developer. I <Heart width={30} height={30} className={styles.heartBeat}/> building, fixing, and tweaking things until they reach their optimum state.</p>
          <p>In my former life I was an Interior Design Project Manager with a knack for graphic design. With a few years of Web Development under my belt, I now use a trained eye and natural empathy for the user to create refreshing interactive web-based experiences. Sometime in my career future, I would like to become a Product Manager.</p>
        </div>
      </div>

    )
  }
}

export default AboutMe;
