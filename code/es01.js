import PropTypes, { Fragment } from 'prop-types';
import React from 'react';

import PhaseOne from '../code/components/phase-01.js';

const Home = ({ _body, _relativeURL, _parseYaml, groups, _ID }) => (
	<html>
		<main id="right--align">
		<div id="phase1" className="link--phase">
			<PhaseOne width="650" style={{strokeWidth: 1}}/>
			<p>Phase 1</p>
			<div className="title" style={{ marginBottom: "2rem", fontSize: "2rem" }}>Data as Material</div>
		</div>
		<div class="hero--text">{ _body }</div>
		</main>
			<main className="hero--text">
				<div className="projects--directory">
	 			 {
	 				 Object.keys(groups).map(item => (
						 <>
						 <img key={item} src={groups[item].image}/>
	 					 <h2 key={item}>{groups[item].title}</h2>
						 <p className="project--members" key={item}>{groups[item].names}</p>
						 <p className="project--description" key={item}>{groups[item].desc}</p>
						 </>
	 				 ))
	 			 }
 			 </div>
			</main>
			<aside id="single--phase">
				<div id="projects--aside">
					<h4>All Projects</h4>
					<ul className="projects--links">
						{
							Object.keys(groups).map(item => (
								<li className="group--link" key={item}>{groups[item].title}</li>
							))
						}
					</ul>
				</div>
			</aside>
	</html>
);

export default Home;
