const _ = require('lodash');
const when = require('when');
const sinon = require('sinon');
require('sinon-stub-promise');

// Complete this function

// requestResults returns an object of results from promises
// return: A object containing the results from a given promises results.
module.exports = function requestResults() {

	// These stub functions replicate async requests
	let requestOne = sinon.stub().resolves(1);
	let requestTwo = sinon.stub().resolves(2);

	let promise = [requestOne(), requestTwo()];

	// Return the array of requests when all promises complete.
	return when.all(promise).then(requests =>
	{		
		return requests;
	});
};
