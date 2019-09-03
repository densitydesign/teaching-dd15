import PropTypes, { Fragment } from 'prop-types';
import React from 'react';
import Badge from '../code/components/badge.js';

import PhaseOne from '../code/components/phase-01.js';
import PhaseTwo from '../code/components/phase-02.js';
import PhaseThree from '../code/components/phase-03.js';

const Home = ({ _body, _relativeURL, _ID }) => (
	<html>
			<main class="hero--text">
				<div>{ _body }</div>
			</main>
			<aside id="phases">
				<div id="phase1" className="link--phase">
				<PhaseOne width="200"/>
				<p>Phase 1</p>
				<div className="title">Data as Material</div>
				<div className="arrow">→</div>
				</div>
				<div id="phase2" className="link--phase">
				<PhaseTwo width="200"/>
				<p>Phase 2</p>
				<div className="title">Data as Artifact</div>
				<div className="arrow">→</div>
				</div>
				<div id="phase3" className="link--phase">
				<PhaseThree width="200"/>
				<p>Phase 3</p>
				<div className="title">Data Publics</div>
				<div className="arrow">→</div>
				</div>
			</aside>
	</html>
);

export default Home;