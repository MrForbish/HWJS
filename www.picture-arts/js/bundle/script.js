window.addEventListener('DOMContentLoaded', function() {

	let modal = require('../parts/modal.js');
	let moreStyles = require('../parts/moreStyles.js');
	let slider = require('../parts/slider.js');
	let ajax = require('../parts/ajax.js');
	let numMask = require('../parts/numMask.js');

	modal();
	moreStyles();
	slider();
	ajax();
	numMask();

});