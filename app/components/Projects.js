import React from 'react';
import { topMain } from '../styles/index.css';
import ListDevProjects from './ListDevProjects';
import ListDesignProjects from './ListDesignProjects';

const devProjects = [
  {
    title: "KPI Dashboard",
    url: "",
    description: "KPI (Key Performance Indicators) TV dashboard for display at CSU",
    technologies: "JavaScript / CSS / Decoupled API / GitHub / Adobe XD"
  },
  {
    title: "Baby Monitor App",
    url: "https://github.com/taramason/g41capstone",
    description: "An Android App that allows you to use two phones to create a baby monitor when you are on the go.",
    technologies: "Ionic, WebRTC, PeerJS, Cordova"
  },
  {
    title: "Social Media Prototype",
    url: "https://github.com/taramason/socialMediaApp",
    description: "An Android App that allows you to use two phones to create a baby monitor when you are on the go.",
    technologies: "AngularJS / Bootstrap"
  },
  {
    title: "Online Library",
    url: "https://github.com/taramason/socialMediaApp",
    description: "A CRUD app that allows users to add books to an online library",
    technologies: "Materialize / JavaScript / Handlebars / PostgreSQL / Node.js / Express / Knex.js."
  },
];

const designProjects = [
  {
    title: "Girls Coding App",
    url: "https://xd.adobe.com/view/f54e5fa0-4cc7-4c22-825c-530adb230134",
    description: "Design for a pet project, an app targeting girls who want to learn how to code. In progress.",
    technologies: "Adobe XD Prototyping Software"
  },
  {
    title: "VR Video App Prototype ",
    url: "https://app.atomic.io/d/YtIJpwqF3edg?page=da07f546-a878-4064-b1e5-d1a159c51509",
    description: "Design for an internal app to play educational Virtual Reality video",
    technologies: "Atomic.io Prototyping Tool"
  },
  {
    title: "TMI Mockups",
    url: "https://xd.adobe.com/view/1858fea7-8ce1-4714-93c6-906cf176e2d5?fullscreen",
    description: "Mockup for potential TMI addition to CSU Online",
    technologies: "Adobe XD"
  }
];

class Projects extends React.Component {
  render() {
    return (
      <div className={topMain}>
        <ListDevProjects projects={devProjects} />
        <ListDesignProjects projects={designProjects} />
      </div>
    )
  }
}

export default Projects;