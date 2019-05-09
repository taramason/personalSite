import React from 'react';
import { scroll, topMain } from './aboutMeStyles.css';




class Scroll extends React.Component {
  render() {

    return (
      <div className={topMain}>
        <div className={scroll}>
          <a href='#theResume'>
            <i class="material-icons">
              expand_more
            </i>
          </a>
        </div>
      </div>

    )
  }
}

export default Scroll;