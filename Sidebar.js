import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar() {
	return (
		<aside className="sidebar">
			<h1 className="projectName">Resume Builder</h1>
			<ul>
				<li><Link to="mydetails">My Details</Link></li>
				<li><a href="aboutme">About Me</a></li>
				<li><a href="skills">Skills & Proficiencies</a></li>
				<li><a href="workexp">Work Experience</a></li>
				<li><a href="">Educational Background</a></li>
				<li><a href="">Achievements</a></li>
				<li><a href="">Memberships</a></li>
			</ul>
		</aside>
	)
}

export default Sidebar