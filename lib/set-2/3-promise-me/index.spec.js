/* eslint no-unused-expressions:0 */
const {expect} = require('chai');
const requestResults = require('.');

describe('Set-2: Promise Me', () => {

  beforeEach(() => {});

  it('Base Test : Ensure array is not empty', () => {

    return requestResults().then(results => {
      expect(results).to.not.be.empty;
    });

  });

  // Write your correctness tests here
  
	it('Return Object Test : Ensure an object of requests is returned', () => {
		return requestResults().then(results => {
			expect(results).to.be.object;
		});
	});
	
	it('Correct Array Returned Test : ensure the returned array is correct', () => {
		return requestResults().then(results => {			
			expect(results).to.eql([1, 2]);
		});
	});	
	
	/* Originally used before switching to an array of values instead of a object with keys.
	it('Correct Object Returned Test : ensure the returned object is correct', () => {
		return requestResults().then(results => {			
			expect(results).to.eql({"promise_1": 1, "promise_2": 2});
		});
	});*/

});
