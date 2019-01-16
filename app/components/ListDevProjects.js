import React from 'react';
import {  topContent, portfPreview, portfCircle, projects, middle, projectsH1, portfDiv, portfP, portfDescrDiv, portfH1 } from '../styles/index.css';


class ListDevProjects extends React.Component {
  render() {
    console.log("projects", this.props);
    return (
      <div className={projects}>
      <h1 class={projectsH1}>Development</h1>
       {this.props.projects.map(function(project){
          return (
            <div className={portfDiv}>
              <a href={project.url} className={portfCircle} target="_blank">
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

export default ListDevProjects;