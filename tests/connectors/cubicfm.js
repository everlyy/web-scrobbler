'use strict';

module.exports = function(driver, connectorSpec) {
	connectorSpec.shouldLoadWebsite(driver, {
		url: 'http://cubic.fm/'
	});
};
