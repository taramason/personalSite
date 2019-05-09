import React from 'react';
import styles from './projectsStyles.css';


class ListDesignProjects extends React.Component {
  render() {
    console.log("projects", this.props);
    return (

      <div className={styles.projects}>
        <h2>Design</h2>
        {this.props.projects.map(function(project){
          return(
            <div className={styles.portfDiv}>
              <a href={project.url} target="_blank">
                <div className={styles.portfDescrDiv}>
                  <h3 className={styles.resumeH3}>{project.title}</h3>
                  <p className={styles.portfP}>{project.description}</p>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    )
  }
};

export default ListDesignProjects;