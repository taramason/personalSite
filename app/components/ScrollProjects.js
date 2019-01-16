import React from 'react';
import { scroll } from '../styles/index.css';




class ScrollProjects extends React.Component {
  render() {
    return (
      <div className={scroll}>
        <a>
          <i class="material-icons">
            expand_more
          </i>
        </a>
      </div>
    )
  }
}

export default ScrollProjects;