import React from 'react';
import {  topContent2, portfPreview, projectsH1, portfDiv, portfP, portfDescrDiv, portfH1 } from '../styles/index.css';


class ListDesignProjects extends React.Component {
  render() {
    console.log("projects", this.props);
    return (

      <div className={topContent2}>
        <h1 class={projectsH1}>Design</h1>
        {this.props.projects.map(function(project){
          return(
            <div className={portfDiv}>
              <a href={project.url} className={portfP} target="_blank">
                <div className={portfPreview}></div>
              </a>
              <div className={portfDescrDiv}>
                <h1 className={portfH1}>{project.title}</h1>
                
                <p className={portfP}>{project.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
};

export default ListDesignProjects;