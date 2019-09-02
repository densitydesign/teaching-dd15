import PropTypes, { Fragment } from 'prop-types';
import React from 'react';

import Drawer from "../code/components/toc-button.js"

const Syllabus = ({ _body, _relativeURL, _ID }) => (
	<html>
	<Drawer text="Contents"/>
	<aside id="syllabus--aside">
	<div id="table--of--content">

	</div>
	</aside>
	<main id="right--align">
	{ _body }
	</main>
	<script src={ _relativeURL( `/assets/js/toc.js`, _ID ) } />
	</html>
);

export default Syllabus;
