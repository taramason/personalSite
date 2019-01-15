import React from 'react';
import { scroll } from '../styles/index.css';




class Scroll extends React.Component {
  render() {

    return (
      <div className={scroll}>
        <a href='#theResume'>
          <i class="material-icons">
            expand_more
          </i>
        </a>
      </div>
    )
  }
}

export default Scroll;