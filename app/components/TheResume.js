var React = require('react');
var style = require ('../styles/index.css');
var Experience = require('./experience');
var School = require('./school');
var Interests = require('./interests');
var Linkify = require('react-linkify');
//add PropTypes, check for string. https://learn.tylermcginnis.com/courses/50507/lectures/2466607
//https://reactjs.org/docs/typechecking-with-proptypes.html




class Index extends React.Component {
  render() {

  	const jobs = [
      {
        company: "CSU Online",
        position: "Full Stack Developer",
        date: "June 2017 / present",
        dailyDuties: "Work with a small team of developers to troubleshoot and solve issues on legacy system. Maintain existing website, create internal apps in preferred technologies to help with productivity & performance. Create user stories & wireframes for OSHER website redesign, develop front-end from mockups.",
        keyAccomplishments: [
          "Worked across departments to identify gaps in current systems and problem-solve solutions in processes and product.",
          "Persuaded management to allow department to hold monthly hackathons to promote innovation.",
          "Created a team whose purpose is to spark creativity.",
          "Created dashboard to display departments Key Performance Indicators (KPI’s)",
          "Took the initiative to push for adoption of User Testing to analyze & improve existing products."
        ],
        technologies: "C# / .netASP MVC / Java / JavaScript / CSS, SASS & Compass / Visual Studio / Version Control / Other tech as desired (React, Adobe XD, Adobe Suite)"
      },
      {
        company: "Excelsior Solutions",
        position: "Front End / JavaScript Developer",
        date: "April 2017 / July 2017",
        dailyDuties: "Completed Jira tickets for features & troubleshoot bug fixes on legacy site code as needed. Worked 90% remotely. ",
        keyAccomplishments: [
          "Designed mockups for site update using existing brand look and feel.",
          "Website re-design for a billion-dollar business."
        ],
        technologies: "Javascript / CSS & SASS / Jira / Github / Adobe XD"
      },
      {
        company: "Tara Creative",
        position: "Owner",
        date: "Oct 2018 / Present",
        dailyDuties: "Web Design & Development, Interior Design, Graphic Design, art, flipping, and Real Estate (Current Colorado Real Estate License held). Relevent experience only below.",
        keyAccomplishments: [
          "Developed & executed complete redesign of local business website.",
          "Analyzed google metrics to recommend opportunities for improvements in marketing.",
          "Integrated existing brand with an updated look.",
          "Created Heat Maps & screen recordings to find usability issues."
        ],
        technologies: " CSS & SASS / Github / Adobe XD / Squarespace"
      },
      {
        company: "Intelligent Commercial Environments",
        position: "Project Manager",
        date: "March 2013 / April 2015",
        dailyDuties: "Project Managed multiple projects from initial consultation, design approval, placing complicated orders, tracking, and invoicing. Maintained excellent communication, customer service, and organization throughout the entire transaction while staying true to brand standards and sales goals.",
        keyAccomplishments: [
          "Received 100% “excellent” ratings on mandatory customer satisfaction surveys.",
          "Worked independently to manage multiple active projects at once."
        ],
        technologies: "AutoCAD / Adobe Suite / Project Management Software"
      },
      {
        company: "Multiple Real Estate Firms",
        position: "Real Estate Broker",
        date: "June 2012 / present",
        dailyDuties: "Licensed professional who helped buyers and sellers in Real Estate transactions. Write up contracts for sale of RE property, discuss conditions of sale, and perform any other fudiciary responsibilities as required by law or otherwise required.",
        keyAccomplishments: [
          "Made over $2.5 million in sales in first year"
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
        description: "I love to learn. I am extremely interested in learning the in's and outs of this entire business. If I could, I would go back to school and get a degree in Business, Computer Science, and Human Computer Interaction. Since that doesn't seem very feasable right now, I am happily working my way through UX Design and Product Design courses, applying the information as I can practically, reading a ton on modern marketing techniques, while teaching myself new technologies. My ultimate career goal is to move into Product Management. I love creating and being a part of building great products!"
      }
    ];

//pass in as props (divide out experience, education, etc.)
    return (
      <div id="theResume" className={style.middleContainer}>
        <div className={style.middle}>
          <Experience jobs={jobs} />
          <School education={education} />
          <Interests interests={interests} />
        </div>
      </div>
    )
  }
}

module.exports = Index;
