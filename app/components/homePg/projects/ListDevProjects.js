import React from 'react';
import { portfPreview, projects, portfDiv, portfP, portfDescrDiv, portfH1 } from './projectsStyles.css';


class ListDevProjects extends React.Component {
  render() {
    console.log("projects", this.props);
    return (
      <div className={projects}>
      <h2 >Development</h2>
       {this.props.projects.map(function(project){
          return (
            <div className={portfDiv}>
              <a href={project.url} target="_blank">
                  <div className={portfDescrDiv}>
                  <h3>{project.title}</h3>
                  <p className={portfP}>{project.description}</p>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    )
  }
};

export default ListDevProjects;