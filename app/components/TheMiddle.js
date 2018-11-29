var React = require('react');
var style = require ('../styles/index.css');
var Experience = require('./experience');
var School = require('./school');
var Interests = require('./interests');





class TheMiddle extends React.Component {
  render() {
  	const jobs = [
      {
        company: "CSU Online",
        position: "Full Stack Developer",
        date: "June 2017 / present",
        duties: [
          "Program web-based applications based on mockups using a variety of tech stacks.",
          "Complete JIRA tickets as needed to fix bugs on legacy software.",
          "Create user stories, wireframes, for website redesign and Identify gaps in current systems and create innovative technical solutions & inititaives to drive efficiency and positive change.",
          "Personally leading the adoption of User Testing and implementation.",
          "Leading UX strategy initiatives for side projects.",
          "Maintain existing website in Javascript and C#/.net MVC, create internal apps in any preferred technology."
        ],
        technologies: "C# / .netASP MVC / Java / JavaScript / CSS, SASS & Compass / Visual Studio / Version Control / Other tech as desired (React, Adobe XD, Adobe Suite)"
      },
      {
        company: "Excelsior Solutions",
        position: "Front End / JavaScript Developer",
        date: "April 2017 / July 2017",
        duties: [
          "Created mockups for entire website redesign.",
          "Completed Jira tickets for features & bug fixes as needed.",
          "Worked remotely, contract position."
        ],
        technologies: "Javascript / CSS & SASS / Jira / Github / Adobe XD"
      },
      {
        company: "Intelligent Commercial Environments",
        position: "Project Manager",
        date: "March 2013 / April 2015",
        duties: [
          "Managed multiple commercial office projects from initial consultation, design, placing orders, tracking, and invoicing.",
          "Maintained excellent communication, customer service, and organization throughout the entire transaction while staying true to brand standards and sales goals.",
          "Received 100% “excellent” ratings on customer satisfaction surveys."
        ],
        technologies: "AutoCAD / Adobe Suite"
      },
      {
        company: "Multiple Real Estate Firms",
        position: "Real Estate Broker",
        date: "June 2012 / present",
        duties: [
          "Licensed professional who helped buyers and sellers in Real Estate transactions.", 
          "Write up contracts for sale of RE property, discuss conditions of sale, and perform any other fudiciary responsibilities as required by law or otherwise required."
          ]
      }
    ];

    const education = [
      {
        schoolName: "Galvanize",
        major: "Software Engineering Immersive",
        date: "April 2016 / April 2017",
        description: "\"An intense hands-on program that teaches Full Stack Development using a schedule of three sets of three weeks of instruction and one week of firsthand practice building and deploying projects in an Agile environment.\"",
        technologies: "JavaScript, NEAP stack (Node.js / Express / AngularJS / PostgreSQL) with Git & Github / Bootstrap or Materialize / Firebase / Command Line / Atom / Other self-guided tech as desired (React, Redux, Adobe XD, Python)"
      },
      {
        schoolName: "The Art Institute",
        major: "BA Interior Design, Multimedia and Animation",
        date: " Graduated May 2007",
        description: "\"In the Accredited Interior Design program, students learn the technical and create color theory to realistic rendering techniques, as well as problem-solving, and critical thinking required to create functional, beautiful designs that meet demanding safety, accessibility, and sustainability requirements. In Media Arts & Animation classes, students start by drawing by hand and exploring the fundamentals of composition, color, and design. Then, move to building skills in storytelling, 2D and 3D animation, modeling, background design, lighting, rigging, and more.\"",
        technologies: "AutoCAD, 3Ds Max, Sketchup, Adobe Suite (mostly InDesign, Photoshop, Illustrator, Premier)"
      }
    ];

    const interests = [
      {
        description: "I love to learn. I am extremely interested in learning the in's and outs of this entire business. If I could, I would go back to school and get a degree in Business, Computer Science, and Human Computer Interaction. Since that doesn't seem very feasable right now, I am happily working my way through UX Design and Product Design courses, applying the information as I can practically, reading a ton on modern marketing techniques, while teaching myself mid- to advanced-level React. Some day, I would love to move into Product Management. I love creating and being a part of watching products grow!"
      }
    ];

//pass in as props (divide out experience, education, etc.)
    return (
      <div className={style.middleContainer}>
        <div className={style.middle}>
          <Experience jobs={jobs} />
          <School education={education} />
          <Interests interests={interests} />
        </div>
      </div>
    )
  }
}

module.exports = TheMiddle;
