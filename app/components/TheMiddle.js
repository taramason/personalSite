var React = require('react');
var style = require ('../styles/index.css');




class TheMiddle extends React.Component {
  render() {

    return (
      <div className={style.middle}>
      	<div className={style.resume}>
	      	<h2>Experience</h2>
	      	<h3>CSU Online, June 2017 - present</h3>

	      	<ul>
	      		<li>Program web-based applications based on mockups using a variety of tech stacks.</li>
	      		<li>Complete JIRA tickets as needed to fix bugs.</li>
	      		<li>Create user stories, wireframes, for website redesign and Identify gaps in 
					current systems and create innovative technical solutions & inititaives to 
					drive efficiency and positive change in the organization.
				</li>
	      		<li>Personally leading the adoption of User Testing and implementation.</li>
	      		<li>Leading UX strategy initiatives for side projects.</li>
	      		<li>Maintain existing website in Javascript and C#/.net MVC, create internal apps in 
					any preferred technology.
				</li>
	      		<li>C# / .netASP MVC / Javascript / CSS, SASS & Compass / Visual Studio / Version Control / Other tech as desired (React, Adobe XD)</li>

	      	</ul>
      	</div>
      </div>
    )
  }
}

module.exports = TheMiddle;
