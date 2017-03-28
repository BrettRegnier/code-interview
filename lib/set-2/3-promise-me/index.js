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

	// Return when all promises complete.
	return when.all(promise).then(requests =>
	{
		/* An object was not specified in the expected results
		let results = new Object;
		// Loops incase there is ever more than two requests
		for (let i = 0; i < requests.length; i++)
			results["promise_" + (i+1).toString()] = requests[i];
		*/
		
		let results = [];
		
		for (let i = 0; i < requests.length; i++)
			results.push(requests[i]);
		
		return results;
	});
};
