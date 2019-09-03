import PropTypes, { Fragment } from 'prop-types';
import React from 'react';

const Home = ({ _body, _relativeURL, _ID }) => (
	<html>
	<aside>
		<div id="syllabus" className="link--booklet">
			<a href={ _relativeURL( `/syllabus/`, _ID ) }>Syllabus</a>
		</div>
		<div id="pack" className="link--booklet">
			<a href={ _relativeURL( `/starter-pack/`, _ID ) }>Starter Pack</a>
		</div>
		<div id="course" className="link--booklet">
			<a href={ _relativeURL( `/course-results/`, _ID ) }>Course results</a>
		</div>
	</aside>
			<main>
				{ _body }
			</main>

	</html>
);

export default Home;
