import PropTypes, { Fragment } from 'prop-types';
import React from 'react';

const Home = ({ _body, _relativeURL, _parseYaml, groups, _ID }) => (
	<html>
			<main class="hero--text">
				<div>{ _body }</div>
			</main>
			<aside>
				{ console.log(groups.names) }
			</aside>
	</html>
);

export default Home;
